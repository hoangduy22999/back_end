import { Col, Row } from 'antd';
import { ToastContainer } from 'react-toastify';

const AuthLayout = ({ children }) => {
  return (
    <Row justify='center' className='auth-layout'>
      <ToastContainer position='bottom-right' autoClose={2000} closeOnClick />
      <Col className='auth-layout-form'>
        <div className='auth-layout_form'>{children}</div>
      </Col>
    </Row>
  );
};

export default AuthLayout;
