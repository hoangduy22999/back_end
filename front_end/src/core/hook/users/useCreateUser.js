/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react'

import { createUser } from '@/core/redux/userSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const useCreateUser = () => {
  const { resCreateUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const CreateUser = (payload) => {
    dispatch(createUser(payload));
  };

  useEffect(() => {
    if (resCreateUser?.message) {
      navigate('/');
      toast.success(resCreateUser?.message);
    }
  }, [resCreateUser]);

  return { CreateUser };
};

export default useCreateUser;
