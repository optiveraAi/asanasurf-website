import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { BOOKING, AVAILABLE_TRIPS, PACKAGES } from '../../constants/content';
import { sendBookingEmail } from '../../utils/emailService';
import { validateForm, sanitizeFormData, MAX_LENGTHS } from '../../utils/validation';
import { recordFormStart, performSpamCheck, onFormSubmitSuccess, getHoneypotFieldProps } from '../../utils/antiSpam';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import TripDateCard from '../ui/TripDateCard';

/**
 * Booking Form Section with:
 * - Complete form validation
 * - EmailJS integration for sending requests
 * - Loading and success/error states
 * - Responsive design
 * - Smooth animations
 */
const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: '',
    dates: '',
    guests: '',
    requests: '',
  });

  const [honeypot, setHoneypot] = useState('');
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // SECURITY: Record when user starts filling the form (anti-bot measure)
  useEffect(() => {
    recordFormStart();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Allow user to type freely - sanitization happens on submit
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear validation error for this field
    if (validationErrors[name]) {
      setValidationErrors({
        ...validationErrors,
        [name]: '',
      });
    }
  };

  const handleTripSelect = (tripId: string) => {
    setFormData({
      ...formData,
      dates: tripId,
    });

    // Clear validation error for dates field
    if (validationErrors.dates) {
      setValidationErrors({
        ...validationErrors,
        dates: '',
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // SECURITY: Perform spam checks (honeypot, rate limiting, fill time)
    const spamCheck = performSpamCheck(honeypot);
    if (!spamCheck.isValid) {
      setValidationErrors({ form: spamCheck.message || 'Submission blocked' });
      return;
    }

    // SECURITY: Validate form before submission
    const validation = validateForm(formData, ['name', 'email', 'package', 'dates', 'guests']);

    if (!validation.isValid) {
      setValidationErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setValidationErrors({});

    try {
      // SECURITY: Sanitize all form data before sending
      const sanitizedData = sanitizeFormData(formData);

      // Convert trip ID to readable format for email
      const selectedTrip = AVAILABLE_TRIPS.find(trip => trip.id === formData.dates);
      const emailData = {
        ...sanitizedData,
        dates: selectedTrip
          ? `${selectedTrip.dateRange} - ${selectedTrip.location}`
          : sanitizedData.dates,
      };

      const result = await sendBookingEmail(emailData);

      if (result.success) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          package: '',
          dates: '',
          guests: '',
          requests: '',
        });
        // SECURITY: Record successful submission for rate limiting
        onFormSubmitSuccess();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Determine background image based on selected package
  const getTripBackgroundImage = () => {
    const selectedPackageValue = formData.package;

    // Check if Surf package is selected
    if (selectedPackageValue.includes('Surf Adventure & Yoga')) {
      return PACKAGES.packages[0].heroImage; // Surf package image
    }

    // Check if Yoga package is selected
    if (selectedPackageValue.includes('Yoga Retreat Experience')) {
      return PACKAGES.packages[1].heroImage; // Yoga package image
    }

    // Default fallback
    return undefined;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="book" className="section-container bg-cream-200">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-sand-900 mb-4">
            {BOOKING.sectionTitle}
          </h2>
          <p className="text-xl text-sand-700">
            {BOOKING.sectionSubtitle}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Success Message */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 bg-jungle-50 border border-jungle-300 rounded-lg p-6 flex items-start gap-4"
            >
              <CheckCircle className="w-6 h-6 text-jungle-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-jungle-800 mb-2">
                  {BOOKING.form.successMessage.title}
                </h3>
                <p className="text-jungle-700">
                  {BOOKING.form.successMessage.message}
                </p>
              </div>
            </motion.div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 bg-red-50 border border-red-300 rounded-lg p-6 flex items-start gap-4"
            >
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-red-800 mb-2">
                  {BOOKING.form.errorMessage.title}
                </h3>
                <p className="text-red-700">
                  {BOOKING.form.errorMessage.message}
                </p>
              </div>
            </motion.div>
          )}

          {/* Booking Form */}
          <div className="bg-cream-50 rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form-level validation errors */}
              {validationErrors.form && (
                <div className="bg-red-50 border border-red-300 rounded-lg p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-red-700">{validationErrors.form}</p>
                </div>
              )}

              {/* SECURITY: Honeypot field (hidden from users, catches bots) */}
              <input
                {...getHoneypotFieldProps()}
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={BOOKING.form.fields.name.placeholder}
                  maxLength={MAX_LENGTHS.name}
                  required
                />
                {validationErrors.name && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={BOOKING.form.fields.email.placeholder}
                  maxLength={MAX_LENGTHS.email}
                  required
                />
                {validationErrors.email && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={BOOKING.form.fields.phone.placeholder}
                  maxLength={MAX_LENGTHS.phone}
                />
                {validationErrors.phone && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.phone}</p>
                )}
              </div>

              {/* Package Selection */}
              <div>
                <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-2">
                  {BOOKING.form.fields.package.label} <span className="text-red-500">*</span>
                </label>
                <select
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg
                           focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-200
                           transition-all duration-200"
                >
                  <option value="">Choose your retreat package</option>
                  {BOOKING.form.fields.package.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {validationErrors.package && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.package}</p>
                )}
              </div>

              {/* Available Trip Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {BOOKING.form.fields.dates.label} <span className="text-red-500">*</span>
                </label>
                <div className="space-y-3">
                  {AVAILABLE_TRIPS.map((trip) => (
                    <TripDateCard
                      key={trip.id}
                      trip={trip}
                      selected={formData.dates === trip.id}
                      onChange={() => handleTripSelect(trip.id)}
                      backgroundImage={getTripBackgroundImage()}
                    />
                  ))}
                </div>
                {validationErrors.dates && (
                  <p className="mt-2 text-sm text-red-600">{validationErrors.dates}</p>
                )}
              </div>

              {/* Number of Guests */}
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Number of Guests */}
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Guests <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="number"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    placeholder={BOOKING.form.fields.guests.placeholder}
                    maxLength={MAX_LENGTHS.guests}
                    required
                  />
                  {validationErrors.guests && (
                    <p className="mt-1 text-sm text-red-600">{validationErrors.guests}</p>
                  )}
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label htmlFor="requests" className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests or Questions
                </label>
                <Textarea
                  name="requests"
                  value={formData.requests}
                  onChange={handleChange}
                  placeholder={BOOKING.form.fields.message.placeholder}
                  rows={5}
                  maxLength={MAX_LENGTHS.specialRequests}
                />
                {validationErrors.requests && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.requests}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {BOOKING.form.submittingButton}
                  </>
                ) : (
                  BOOKING.form.submitButton
                )}
              </Button>

              <p className="text-sm text-gray-500 text-center mt-4">
                We'll respond to your request within 24 hours
              </p>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Booking;
