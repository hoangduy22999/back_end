import { logout } from '@/core/redux/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AwaitResetPass = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <h3>Email đặt lại mật khẩu đã được gửi.</h3>
      <h3 style={{ marginBottom: '20px' }}>Vui lòng kiểm tra địa chỉ email đã đăng ký của bạn.</h3>
      <button
        style={{ display: 'block', margin: '0 auto' }}
        onClick={() => {
          dispatch(logout());
          navigate('/login');
        }}
      >
        Đăng nhập
      </button>
    </>
  );
};

export default AwaitResetPass;
