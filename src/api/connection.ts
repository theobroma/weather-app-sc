import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

const baseURL = import.meta.env.VITE_REACT_APP_CONNECTION_URL;
const apiKey = import.meta.env.VITE_REACT_APP_CONNECTION_URL;

export const axiosInstance = applyCaseMiddleware(
  axios.create({
    baseURL,
    params: {
      key: apiKey,
    },
  }),
);
