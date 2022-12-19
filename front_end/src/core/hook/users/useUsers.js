// import React from 'react';

import { getListUser } from '@/core/redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const useUsers = () => {
  const dispatch = useDispatch();
  const { listUsers } = useSelector((state) => state.user);

  const getAllUsers = () => {
    dispatch(getListUser());
  };

  return {
    getAllUsers,
    listUsers,
  };
};

export default useUsers;
