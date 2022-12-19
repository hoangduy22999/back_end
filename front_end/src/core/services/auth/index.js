import axiosClient from '../axiosClient';

const authService = {
  login: async (data) => {
    const url = 'authenticate';
    return await axiosClient.post(url, data);
  },
};

export default authService;
