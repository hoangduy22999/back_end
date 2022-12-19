import axiosClient from '@/core/services/axiosClient';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useResetPassword = () => {
  const [resResetPassword, setResResetPassword] = useState();
  const navigate = useNavigate();
  const resetPassword = async (data) => {
    try {
      const res = await axiosClient.post('reset_password', data);
      setResResetPassword(res);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    if (resetPassword && resetPassword.status === 'ok') {
      navigate('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetPassword]);

  return { resResetPassword, resetPassword };
};

export default useResetPassword;
