// Backend2 Email Service URL
const BACKEND2_URL = import.meta.env.VITE_BACKEND2_URL || 'http://localhost:5000';

// Main API base URL
const API_URL = import.meta.env.VITE_API_URL || '/api';

/**
 * Lightweight fetch wrapper (replaces axios — saves ~15 KB)
 */
const request = async (url, options = {}) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const res = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      let message = 'Something went wrong. Please try again.';

      if (Array.isArray(data.errors)) {
        message = data.errors.map(e => e.message || e).join(', ');
      } else if (data.errors?.join) {
        message = data.errors.join(', ');
      } else if (data.message) {
        message = data.message;
      }

      throw new Error(message);
    }

    return res.json();
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Request timed out. Please check your connection.');
    }
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      throw new Error('Cannot reach the server. Please check your connection.');
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
};

/**
 * Submit the contact form via Backend2 email service
 * @param {Object} formData - { name, email, phone?, service?, message }
 * @returns {Promise<Object>} - Backend response data
 */
export const submitContactForm = async (formData) => {
  return request(`${BACKEND2_URL}/api/send-email`, {
    method: 'POST',
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || '',
      service: formData.service || '',
      message: formData.message,
    }),
  });
};

/**
 * Extract an array from an API response that may be:
 * - A plain array
 * - An object like { projects: [...] }, { reviews: [...] }, { data: [...] }
 */
const extractArray = (data) => {
  if (Array.isArray(data)) return data;
  if (data && typeof data === 'object') {
    for (const key of ['data', 'projects', 'reviews', 'items', 'results']) {
      if (Array.isArray(data[key])) return data[key];
    }
  }
  return [];
};

/**
 * Fetch projects from the backend API
 * @returns {Promise<Array>} - Array of project objects
 */
export const fetchProjects = async () => {
  const data = await request(`${API_URL}/projects`);
  return extractArray(data);
};

/**
 * Fetch reviews from the backend API
 * @returns {Promise<Array>} - Array of review objects
 */
export const fetchReviews = async () => {
  const data = await request(`${API_URL}/reviews`);
  return extractArray(data);
};
