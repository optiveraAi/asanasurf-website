import emailjs from '@emailjs/browser';

// EmailJS Configuration
// NOTE: Replace these with your actual EmailJS credentials
// Get them from: https://www.emailjs.com/
export const EMAIL_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  TEMPLATE_ID_BOOKING: 'YOUR_BOOKING_TEMPLATE_ID', // Template for booking requests
  TEMPLATE_ID_CONTACT: 'YOUR_CONTACT_TEMPLATE_ID', // Template for contact form
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // Your EmailJS public key
};

// Initialize EmailJS with your public key
export const initEmailJS = () => {
  emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
};

// Send booking request email
export const sendBookingEmail = async (formData: {
  name: string;
  email: string;
  phone?: string;
  package: string;
  dates: string;
  guests: string;
  requests?: string;
}) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      package: formData.package,
      preferred_dates: formData.dates,
      number_of_guests: formData.guests,
      special_requests: formData.requests || 'None',
      to_name: 'AsanaSurf Team',
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID_BOOKING,
      templateParams,
      EMAIL_CONFIG.PUBLIC_KEY
    );

    return { success: true, response };
  } catch (error) {
    console.error('Booking email error:', error);
    return { success: false, error };
  }
};

// Send contact form email
export const sendContactEmail = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'AsanaSurf Team',
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID_CONTACT,
      templateParams,
      EMAIL_CONFIG.PUBLIC_KEY
    );

    return { success: true, response };
  } catch (error) {
    console.error('Contact email error:', error);
    return { success: false, error };
  }
};
