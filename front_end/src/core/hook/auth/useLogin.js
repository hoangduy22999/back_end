/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, resetRes } from '@/core/redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const useLogin = () => {
  const dispatch = useDispatch();
  const { isLogin, resLogin } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const LoginUser = (data) => {
    dispatch(login(data));
  };

  React.useEffect(() => {
    if (resLogin && resLogin.response.status !== 200) {
      toast.error(resLogin?.response?.data?.error?.user_athentication);
      dispatch(resetRes());
    }

    if (isLogin) {
      navigate('/');
    }
  }, [isLogin, resLogin]);

  return {
    LoginUser,
  };
};

export default useLogin;
