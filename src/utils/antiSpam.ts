/**
 * SECURITY: Anti-Spam and Rate Limiting Utilities
 * Protects forms from automated submissions, bots, and abuse
 */

// Rate limiting configuration
const RATE_LIMIT_MS = 30000; // 30 seconds between submissions
const MIN_FILL_TIME_MS = 2000; // Minimum 2 seconds to fill form (catches bots)

// Storage keys
const LAST_SUBMIT_KEY = 'lastSubmitTime';
const FORM_START_KEY = 'formStartTime';

/**
 * Check if user is submitting too quickly (rate limiting)
 * @returns Object with isAllowed boolean and message
 */
export const checkRateLimit = (): { isAllowed: boolean; message?: string } => {
  const lastSubmitTime = localStorage.getItem(LAST_SUBMIT_KEY);

  if (lastSubmitTime) {
    const timeSinceLastSubmit = Date.now() - parseInt(lastSubmitTime, 10);

    if (timeSinceLastSubmit < RATE_LIMIT_MS) {
      const waitTimeSeconds = Math.ceil((RATE_LIMIT_MS - timeSinceLastSubmit) / 1000);
      return {
        isAllowed: false,
        message: `Please wait ${waitTimeSeconds} seconds before submitting again.`,
      };
    }
  }

  return { isAllowed: true };
};

/**
 * Record current submission time for rate limiting
 */
export const recordSubmission = (): void => {
  localStorage.setItem(LAST_SUBMIT_KEY, Date.now().toString());
};

/**
 * Record when user started filling the form
 */
export const recordFormStart = (): void => {
  if (!localStorage.getItem(FORM_START_KEY)) {
    localStorage.setItem(FORM_START_KEY, Date.now().toString());
  }
};

/**
 * Check if form was filled too quickly (likely a bot)
 * @returns Object with isValid boolean and message
 */
export const checkFormFillTime = (): { isValid: boolean; message?: string } => {
  const formStartTime = localStorage.getItem(FORM_START_KEY);

  if (!formStartTime) {
    // If no start time recorded, allow submission but warn in console
    console.warn('Form start time not recorded');
    return { isValid: true };
  }

  const fillTime = Date.now() - parseInt(formStartTime, 10);

  if (fillTime < MIN_FILL_TIME_MS) {
    return {
      isValid: false,
      message: 'Form submitted too quickly. Please take a moment to review your information.',
    };
  }

  return { isValid: true };
};

/**
 * Clear form timing data after successful submission
 */
export const clearFormTiming = (): void => {
  localStorage.removeItem(FORM_START_KEY);
};

/**
 * Validate honeypot field (should be empty if real user)
 * @param honeypotValue - Value of the honeypot field
 * @returns true if valid (honeypot is empty), false if spam detected
 */
export const validateHoneypot = (honeypotValue: string): boolean => {
  // If honeypot is filled, it's likely a bot
  return honeypotValue === '';
};

/**
 * Comprehensive spam check combining all anti-spam measures
 * @param honeypotValue - Value of honeypot field
 * @returns Object with isValid boolean and message
 */
export const performSpamCheck = (
  honeypotValue: string
): { isValid: boolean; message?: string } => {
  // Check honeypot
  if (!validateHoneypot(honeypotValue)) {
    console.warn('Spam detected: honeypot filled');
    return {
      isValid: false,
      message: 'Spam detected. Please contact us directly if you are a real user.',
    };
  }

  // Check rate limiting
  const rateLimitCheck = checkRateLimit();
  if (!rateLimitCheck.isAllowed) {
    return {
      isValid: false,
      message: rateLimitCheck.message,
    };
  }

  // Check form fill time
  const fillTimeCheck = checkFormFillTime();
  if (!fillTimeCheck.isValid) {
    return fillTimeCheck;
  }

  return { isValid: true };
};

/**
 * Hook to be called when form is successfully submitted
 */
export const onFormSubmitSuccess = (): void => {
  recordSubmission();
  clearFormTiming();
};

/**
 * Get honeypot field props for consistent implementation
 * @returns Object with field props
 */
export const getHoneypotFieldProps = () => ({
  type: 'text',
  name: 'website', // Bots often fill this
  autoComplete: 'off',
  tabIndex: -1,
  'aria-hidden': true,
  style: {
    position: 'absolute' as const,
    left: '-9999px',
    width: '1px',
    height: '1px',
    opacity: 0,
    pointerEvents: 'none' as const,
  },
});
