import DOMPurify from 'dompurify';

/**
 * SECURITY: Input Validation and Sanitization Utilities
 * These functions protect against XSS, injection attacks, and malformed data
 */

// Maximum allowed lengths for form fields (prevents DoS attacks)
export const MAX_LENGTHS = {
  name: 100,
  email: 254, // RFC 5321 maximum
  phone: 20,
  message: 2000,
  specialRequests: 2000,
  package: 100,
  dates: 50,
  guests: 10,
};

/**
 * Sanitize string input by removing all HTML tags and scripts
 * @param input - Raw user input
 * @returns Sanitized string safe for processing
 */
export const sanitizeInput = (input: string): string => {
  if (!input) return '';

  // Remove all HTML tags and dangerous content
  const sanitized = DOMPurify.sanitize(input, {
    ALLOWED_TAGS: [], // No HTML tags allowed
    ALLOWED_ATTR: [], // No attributes allowed
  });

  // Trim whitespace
  return sanitized.trim();
};

/**
 * Validate email format (more robust than HTML5 validation)
 * @param email - Email address to validate
 * @returns true if valid email format
 */
export const isValidEmail = (email: string): boolean => {
  if (!email) return false;

  // RFC 5322 compliant email regex (simplified but robust)
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  return emailRegex.test(email) && email.length <= MAX_LENGTHS.email;
};

/**
 * Validate phone number format (international support)
 * @param phone - Phone number to validate
 * @returns true if valid phone format
 */
export const isValidPhone = (phone: string): boolean => {
  if (!phone) return true; // Phone is optional in most forms

  // Allow: digits, spaces, hyphens, parentheses, plus sign
  // Minimum 10 characters, maximum 20
  const phoneRegex = /^\+?[\d\s\-()]{10,20}$/;

  return phoneRegex.test(phone);
};

/**
 * Validate field length
 * @param value - Field value
 * @param maxLength - Maximum allowed length
 * @returns true if within length limit
 */
export const validateLength = (value: string, maxLength: number): boolean => {
  return value.length <= maxLength;
};

/**
 * Validate name field (only letters, spaces, hyphens, apostrophes)
 * @param name - Name to validate
 * @returns true if valid name format
 */
export const isValidName = (name: string): boolean => {
  if (!name || name.length < 2) return false;

  // Allow letters (all languages), spaces, hyphens, apostrophes
  const nameRegex = /^[\p{L}\s'-]{2,100}$/u;

  return nameRegex.test(name);
};

/**
 * Validate number of guests (positive integer, reasonable range)
 * @param guests - Number of guests
 * @returns true if valid guest count
 */
export const isValidGuestCount = (guests: string): boolean => {
  const num = parseInt(guests, 10);
  return !isNaN(num) && num >= 1 && num <= 50; // Reasonable maximum
};

/**
 * Comprehensive form validation
 * @param formData - Form data object
 * @param requiredFields - Array of required field names
 * @returns Object with isValid boolean and errors object
 */
export const validateForm = (
  formData: Record<string, string>,
  requiredFields: string[]
): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  // Check required fields
  requiredFields.forEach((field) => {
    if (!formData[field] || formData[field].trim() === '') {
      errors[field] = 'This field is required';
    }
  });

  // Validate email if present
  if (formData.email && !isValidEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Validate phone if present
  if (formData.phone && !isValidPhone(formData.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  // Validate name if present
  if (formData.name && !isValidName(formData.name)) {
    errors.name = 'Name must contain only letters, spaces, hyphens, and apostrophes';
  }

  // Validate guests if present
  if (formData.guests && !isValidGuestCount(formData.guests)) {
    errors.guests = 'Please enter a valid number of guests (1-50)';
  }

  // Check length constraints
  Object.entries(formData).forEach(([key, value]) => {
    const maxLength = MAX_LENGTHS[key as keyof typeof MAX_LENGTHS];
    if (maxLength && !validateLength(value, maxLength)) {
      errors[key] = `This field must be ${maxLength} characters or less`;
    }
  });

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Sanitize all fields in a form data object
 * @param formData - Form data object
 * @returns Sanitized form data
 */
export const sanitizeFormData = <T extends Record<string, string>>(
  formData: T
): T => {
  const sanitized = {} as T;

  Object.entries(formData).forEach(([key, value]) => {
    sanitized[key as keyof T] = sanitizeInput(value) as T[keyof T];
  });

  return sanitized;
};
