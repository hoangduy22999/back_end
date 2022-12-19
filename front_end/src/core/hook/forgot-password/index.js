import axiosClient from '@/core/services/axiosClient';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useForgotPassword = () => {
  const navigate = useNavigate();
  const [responseForgotPassword, setResponseForgotPassword] = useState();
  const forgotPassword = async (email) => {
    try {
      const res = await axiosClient.post('forgot_password', email);
      setResponseForgotPassword(res);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    if (responseForgotPassword && responseForgotPassword.status === 'ok') {
      navigate('/await-reset-password');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responseForgotPassword]);

  return { responseForgotPassword, forgotPassword };
};

export default useForgotPassword;
