import axiosClient from '../axiosClient';

const departmentServices = {
  getListDepartment: async () => {
    const url = 'department';
    return await axiosClient.get(url);
  },

  getDetailDepartment: async (id) => {
    const url = `department/${id}/edit`;
    return await axiosClient.get(url);
  },
};

export default departmentServices;
