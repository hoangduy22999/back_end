import usersService from '@/core/services/users';
import { useState } from 'react';

const useDetailUser = () => {
  const [user, setUser] = useState();
  const getUserDetail = async (id) => {
    try {
      const res = await usersService.getUserDetail(id);
      setUser(res);
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    getUserDetail,
    user,
  };
};

export default useDetailUser;
