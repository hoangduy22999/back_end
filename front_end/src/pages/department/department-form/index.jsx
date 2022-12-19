/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react';
import InputField from '@/components/InputField/InputField';
import SelectField from '@/components/SelectField/SelectField.jsx';
import { Col, Form, Input, Row } from 'antd';
import { useEffect } from 'react';
import ButtonGroup from '../../../components/ButtonGroup/index.jsx';
import { getInitialDepartmentValues } from './initialValue.js';

const DepartmentForm = ({ response, data }) => {
  const [form] = Form.useForm();
  const initialValues = getInitialDepartmentValues(data);
  console.log(initialValues);

  useEffect(() => {
    if (data) {
      form.setFieldsValue(initialValues);
    }
  }, [data]);

  return (
    <div>
      <Row justify='center'>
        <Col className=''>
          <Form
            form={form}
            // onFinish={onFinish}
            name='department_form'
            initialValues={initialValues}
            autoComplete='off'
          >
            <ButtonGroup />
            <Row justify='start'>
              <Col span={12}>
                <InputField
                  name='name'
                  label='Name'
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  type={<Input />}
                  error='name'
                  response={response}
                  rules={[
                    {
                      required: true,
                      message: 'This field is required',
                    },
                  ]}
                />
              </Col>
              <Col span={12}>
                <SelectField
                  name='user_departments'
                  label='Departments'
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  //   options={departments}
                />
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default DepartmentForm;
