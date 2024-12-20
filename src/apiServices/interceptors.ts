import {forgetPassword, login, updatePassword} from './apiUrls';
import {axiosInstance} from './axiosInstance';
import store from '../redux/store';

const noNeedAuth = [login, forgetPassword, updatePassword];

axiosInstance.interceptors.request.use(
  async config => {
    if (noNeedAuth.includes(config.url || '')) {
      return config;
    }

    const apiKey = store.getState().authSlice.apiKey;

    if (apiKey) {
      config.headers['Content-Type'] = 'application/json';
      config.headers.ApiKey = apiKey;
    } else {
      return Promise.reject({
        message: 'API Key is missing for authenticated request.',
      });
    }
    return config;
  },
  error => {
    console.log('Request Interceptor Error:', error);
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error?.response?.status === 401) {
      return Promise.reject({
        message: 'Unauthorized access, please check API Key.',
      });
    }

    return Promise.reject(error);
  },
);

export {axiosInstance};
