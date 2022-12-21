import axiosClient from '../axiosClient';

const usersService = {
  getListUser: async () => {
    const url = 'user';
    return await axiosClient.get(url);
  },
  getUserDetail: async (id) => {
    const url = `user/${id}`;
    return await axiosClient.get(url);
  },
  createUser: async (data) => {
    const url = 'user';
    return await axiosClient.post(url, data);
  },
  updateUser: async ({ id, payload }) => {
    const url = `user/${id}`;
    return await axiosClient.post(url, payload);
  },
};

export default usersService;
