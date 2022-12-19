import axiosClient from '../axiosClient';

const cityServices = {
  getListCities: async () => {
    const url = 'city';
    return await axiosClient.get(url);
  },
  getCityDetail: async (id) => {
    const url = `city/${id}`;
    return await axiosClient.get(url);
  },
};

export default cityServices;
