import { BASE_URL } from '@utils/constants/api';
import axios from 'axios';

export const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

client.interceptors.request.use(
  (config) => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      config.headers['userId'] = Number(userId);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
