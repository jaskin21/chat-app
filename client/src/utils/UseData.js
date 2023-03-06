import axios from 'axios';

/**
 *
 * @param {string} credentials
 * @returns json data or error
 */
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(
      'http://localhost:5000/auth/login',
      credentials
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

/**
 *
 * @param {string} credentials
 * @returns json data or error
 */
export const registerUser = async (credentials) => {
  try {
    const response = await axios.post(
      'http://localhost:5000/auth/register',
      credentials
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
