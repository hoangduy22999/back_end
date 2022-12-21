import axios from 'axios';
import { getAccessToken } from '@/utils/storage';

const configRequest = async (config) => {
  const access_token = getAccessToken() || '';
  if (access_token) config.headers['Authorization'] = `Bearer ${access_token}`;

  return config;
};

const responseResolve = (response) => {
  return response.data;
};

const responseReject = (error) => {
  return Promise.reject(error);
};

const axiosClient = axios.create({
  baseURL: 'http://127.0.0.1:3001/',
  headers: {
    'content-text': 'application/json',
  },
});

axiosClient.interceptors.request.use(configRequest);

axiosClient.interceptors.response.use(responseResolve, responseReject);

export default axiosClient;
