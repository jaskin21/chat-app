import axios from 'axios';

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(
      'http://localhost:5000/auth/login',
      credentials
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const registerUser = async (credentials) => {
  try {
    const response = await axios.post(
      'http://localhost:5000/auth/register',
      credentials
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
