import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
// import AccessDenied from "../../commons/AccessDenied";
import { getAccessToken } from '@/utils/storage';

const PrivateRoute = ({ children }) => {
  const access_token = getAccessToken();
  const { isLogin } = useSelector((state) => state.auth);
  let location = useLocation();

  return isLogin ?? access_token ? children : <Navigate to='/login' state={{ from: location }} />;
};

export default PrivateRoute;
