import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
  'Cache-Control': 'no-cache',
};

const axiosInstance = axios.create({
  baseURL: 'https://example.com',
  headers,
  timeout: 30000,
});

export {axiosInstance};
