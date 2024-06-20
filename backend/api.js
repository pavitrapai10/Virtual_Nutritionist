import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const signupUser = async (name, email, password) => {
  try {
    const response = await api.post('/register', { name, email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const forgetPassword = async (email) => {
  try {
    const response = await api.post('/forget-password', { email });
    return response.data;
  } catch (error) {
    throw error;
  }
};
