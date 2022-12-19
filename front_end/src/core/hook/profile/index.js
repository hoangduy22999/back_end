import { useDispatch, useSelector } from 'react-redux';
import { getProfileAction } from '@/core/redux/profileSlice';

const useProfile = () => {
  const { profile } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const getProfile = () => {
    dispatch(getProfileAction());
  };

  return { profile, getProfile };
};

export default useProfile;
