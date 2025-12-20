/**
 * Form validation utilities
 */

/**
 * Validates email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid email format
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates contact form fields
 * @param {Object} form - Form object with name, email, message
 * @returns {Object} - { isValid: boolean, errors: Object }
 */
export const validateContactForm = (form) => {
  const errors = {};

  if (!form.name || !form.name.trim()) {
    errors.name = "Name is required";
  } else if (form.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  if (!form.email || !form.email.trim()) {
    errors.email = "Email is required";
  } else if (!isValidEmail(form.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!form.message || !form.message.trim()) {
    errors.message = "Message is required";
  } else if (form.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Sanitizes string input (basic XSS prevention)
 * @param {string} str - String to sanitize
 * @returns {string} - Sanitized string
 */
export const sanitizeInput = (str) => {
  if (typeof str !== "string") return "";
  return str
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
};

