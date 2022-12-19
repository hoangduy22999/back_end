import InputField from '@/components/InputField/InputField';
import useResetPassword from '@/core/hook/reset-password';
import validateFrom from '@/utils/validation';
import { Col, Form, Input, Row } from 'antd';
import { useNavigate, useSearchParams } from 'react-router-dom';

const ResetPassword = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [params, setParams] = useSearchParams();
  const { resetPassword } = useResetPassword();

  const handleSubmit = (value) => {
    resetPassword({ ...value, token: params.get('token') });
  };
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Reset Password</h1>
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
              rules={validateFrom.email}
              type={<Input addonBefore={<i className='fa-solid fa-envelope'></i>} />}
            />
          </Col>
          <Col span={24}>
            <InputField
              name='password'
              label='Password'
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={validateFrom.password}
              type={<Input addonBefore={<i className='fa-solid fa-lock'></i>} />}
            />
          </Col>
          <Col span={24}>
            <InputField
              name='password_confirmation'
              label='Password Confirmation'
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={validateFrom.password}
              type={<Input addonBefore={<i className='fa-solid fa-lock'></i>} />}
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

export default ResetPassword;
