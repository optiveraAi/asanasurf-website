import emailjs from '@emailjs/browser';

// EmailJS Configuration
// SECURITY: Credentials are loaded from environment variables
// Create a .env file in the project root with:
//   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
//   REACT_APP_EMAILJS_TEMPLATE_BOOKING=your_booking_template_id
//   REACT_APP_EMAILJS_TEMPLATE_CONTACT=your_contact_template_id
//   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
// Get credentials from: https://www.emailjs.com/
export const EMAIL_CONFIG = {
  SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
  TEMPLATE_ID_BOOKING: process.env.REACT_APP_EMAILJS_TEMPLATE_BOOKING || '',
  TEMPLATE_ID_CONTACT: process.env.REACT_APP_EMAILJS_TEMPLATE_CONTACT || '',
  PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '',
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
    // SECURITY: Only log detailed errors in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Booking email error:', error);
    } else {
      console.error('Booking email failed');
    }
    return {
      success: false,
      error: 'Failed to send booking request. Please try again or contact us directly.'
    };
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
    // SECURITY: Only log detailed errors in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Contact email error:', error);
    } else {
      console.error('Contact email failed');
    }
    return {
      success: false,
      error: 'Failed to send message. Please try again or contact us directly.'
    };
  }
};
