import InputField from '@/components/InputField/InputField';
import useLogin from '@/core/hook/auth/useLogin';
import validateFrom from '@/utils/validation';
import { Checkbox, Col, Form, Input, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const initialValues = {
  email: '',
  password: '',
};

const Login = () => {
  const { LoginUser } = useLogin();

  const [show, setShow] = React.useState(true);
  const [form] = Form.useForm();
  const onLogin = (values) => {
    LoginUser(values);
  };

  return (
    <Row justify='center' className='login'>
      <Col className='login-form'>
        <h1 className='login_title'>Login</h1>
        <Form
          form={form}
          onFinish={onLogin}
          name='login_form'
          initialValues={initialValues}
          autoComplete='off'
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
                type={
                  <Input
                    className='input-field'
                    addonBefore={<i className='fa-solid fa-envelope'></i>}
                  />
                }
              />
            </Col>
            <Col span={24}>
              <InputField
                name='password'
                label='Password'
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                // response={resLogin}
                className='input-control'
                rules={validateFrom.password}
                type={
                  <Input
                    className='login-input'
                    type={show ? 'password' : 'text'}
                    addonBefore={<i className='fa-solid fa-lock'></i>}
                    addonAfter={
                      show ? (
                        <i
                          className='fa-solid fa-eye'
                          style={{ cursor: 'pointer' }}
                          onClick={() => setShow(!show)}
                        ></i>
                      ) : (
                        <i
                          className='fa-sharp fa-solid fa-eye-slash'
                          style={{ cursor: 'pointer' }}
                          onClick={() => setShow(!show)}
                        ></i>
                      )
                    }
                  />
                }
              />
            </Col>
            <Col span={24}>
              <Row className='remember-block' justify='space-between' align='center'>
                <Col>
                  <Form.Item name='remember' valuePropName='checked' label='' className='remember'>
                    <Checkbox>Remember</Checkbox>
                  </Form.Item>
                </Col>
                <Col>
                  <Link to='/forgot-password'>Forgot Password</Link>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <button
                // loading={isLoadingLogin}
                className='login-btn'
                size='large'
                type='primary'
              >
                Login
              </button>
            </Col>
          </Row>
        </Form>
        <Row>
          <Col span={24} className='login-form__sub-option'>
            <p style={{ textAlign: 'center' }}>Or Sign Up Using</p>
          </Col>
          <Col span={24} className='login-form__social'>
            <a href='#'>
              <i className='fa-brands fa-facebook'></i>
            </a>
            <a href='#'>
              <i className='fa-brands fa-twitter'></i>
            </a>
            <a href='#'>
              <i className='fa-brands fa-google'></i>
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Login;
