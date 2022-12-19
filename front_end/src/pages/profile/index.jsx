import InputField from '@/components/InputField/InputField';
import useProfile from '@/core/hook/profile';
import { Col, Input, Row, Form } from 'antd';
import { useEffect } from 'react';

const Profile = () => {
  const { getProfile, profile } = useProfile();
  const [form] = Form.useForm();

  if (profile) {
    var initialValues = {
      first_name: profile.first_name,
      last_name: profile.last_name,
      email: profile.email,
      phone: profile.phone,
      gender: profile.gender,
      address: profile.address,
    };
  }

  useEffect(() => {
    getProfile();

    if (profile) {
      form.setFieldsValue(initialValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Row justify='center'>
      <Col>
        <Form form={form} name='profile_form' initialValues={initialValues} autoComplete='off'>
          <Row justify='center'>
            <Col span={12}>
              <InputField
                name='first_name'
                label='First Name'
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                type={<Input />}
              />
            </Col>
            <Col span={12}>
              <InputField
                name='last_name'
                label='Last Name'
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                type={<Input />}
              />
            </Col>
            <Col span={12}>
              <InputField
                name='email'
                label='Email'
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                type={<Input />}
              />
            </Col>
            <Col span={12}>
              <InputField
                name='phone'
                label='Phone'
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                type={<Input />}
              />
            </Col>
            <Col span={12}>
              <InputField
                name='address'
                label='Address'
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                type={<Input />}
              />
            </Col>
            <Col span={12}>
              <InputField
                name='gender'
                label='Gender'
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                type={<Input />}
              />
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default Profile;
