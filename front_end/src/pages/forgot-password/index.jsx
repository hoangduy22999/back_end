import { Form, Row, Col, Input } from 'antd';
import InputField from '@/components/InputField/InputField';
import validateFrom from '@/utils/validation';
import { useNavigate } from 'react-router-dom';
import useForgotPassword from '@/core/hook/forgot-password';

const ForgotPassword = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { forgotPassword } = useForgotPassword();

  const handleSubmit = (value) => {
    forgotPassword(value);
  };
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Forgot Password</h1>
      <Form
        form={form}
        onFinish={handleSubmit}
        name='forgot_form'
        autoComplete='off'
        id='forgot-pass'
      >
        <Row justify='center'>
          <Col span={24}>
            <InputField
              name='email'
              label='Email'
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              // response={resLogin}
              rules={validateFrom.email}
              className='login-input'
              type={<Input addonBefore={<i className='fa-solid fa-envelope'></i>} />}
            />
          </Col>
          <Col span={16} className='auth-btn-group'>
            <button className='auth-btn' onClick={() => navigate(-1)}>
              Cancle
            </button>
            <button className='auth-btn'>Send</button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default ForgotPassword;
