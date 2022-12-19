import { ACCESS_TOKEN_STORED } from '@/utils/constants';

export const setAccessToken = (access_token) => {
  return localStorage.setItem(ACCESS_TOKEN_STORED, JSON.stringify(access_token.auth_token));
};

export const getAccessToken = () => {
  return JSON.parse(localStorage.getItem(ACCESS_TOKEN_STORED));
};

export const clearAccessToken = () => {
  return localStorage.removeItem(ACCESS_TOKEN_STORED);
};

export const clearLocalStorage = () => {
  return localStorage.clear();
};
