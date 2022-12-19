import { useDispatch } from 'react-redux';
import { logout } from '@/core/redux/authSlice';
import { useNavigate } from 'react-router-dom';

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Logout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return {
    Logout,
  };
};

export default useLogout;
