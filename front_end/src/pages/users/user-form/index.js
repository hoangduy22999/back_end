import InputField from '@/components/InputField/InputField';
import SelectField from '@/components/SelectField/SelectField.jsx';
import useDepartment from '@/core/hook/department/useDepartment.js';
import validateFrom from '@/utils/validation';
import { Col, DatePicker, Form, Input, InputNumber, Row, Upload } from 'antd';
import { useEffect, useState } from 'react';
import ButtonGroup from '../../../components/ButtonGroup/index.jsx';
import useCities from '../../../core/hook/city/useCities.js';
// import { cityList } from './data.js';
import { userFormInitialValues } from './initialValues.js';
// import { InboxOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';

const { Dragger } = Upload;

const UserForm = ({ onSave, response, data }) => {
  const initialValues = userFormInitialValues(data);
  const { getListCities, cities } = useCities();
  const { getListDepartments, department } = useDepartment();
  const [form] = Form.useForm();
  const [districts, setDistricts] = useState([]);
  const [disableDis, setDisableDis] = useState(true);

  const onFinish = (fieldsValue) => {
    const values = {
      user: {
        email: fieldsValue.email,
        phone: fieldsValue.phone,
        district_id: fieldsValue.district_id,
        user_departments_attributes: [
          {
            department_id: fieldsValue.user_departments,
          },
        ],
        address: fieldsValue.address,
        birthday: fieldsValue['birthday'].format('YYYY/MM/DD'),
      },
    };

    onSave(values);
  };

  const handleChangeCity = (value) => {
    setDistricts(
      cities
        .filter((item) => item.id === value)
        .map((item) => item.districts)
        .map((item) =>
          item.map((item) => {
            return {
              value: item.id,
              label: item.name_with_type,
            };
          }),
        ),
    );
    setDisableDis(false);
  };

  useEffect(() => {
    if (data) {
      form.setFieldValue(initialValues);
    }
    getListCities();
    getListDepartments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Row justify='center'>
        <Col className=''>
          <Form
            form={form}
            onFinish={onFinish}
            name='login_form'
            initialValues={initialValues}
            autoComplete='off'
          >
            <ButtonGroup />
            <Row justify='start'>
              <Col span={12}>
                <InputField
                  name='email'
                  label='Email'
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  rules={validateFrom.email}
                  className=''
                  type={<Input />}
                  error='email'
                  response={response}
                />
              </Col>
              <Col span={12}>
                <InputField
                  name='phone'
                  label='Phone Number'
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  type={<InputNumber style={{ width: '100%' }} />}
                  error='phone'
                  response={response}
                />
              </Col>
              <Col span={12}>
                <SelectField
                  name='city_id'
                  errorField='city_id'
                  label='City'
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  options={
                    cities?.map((item) => {
                      return {
                        value: item.id,
                        label: item.name,
                      };
                    }) || []
                  }
                  onChange={(value) => handleChangeCity(value)}
                />
              </Col>
              <Col span={12}>
                <SelectField
                  name='district_id'
                  errorField='district_id'
                  label='District'
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  options={districts[0] || []}
                  className='district-field'
                  rules={validateFrom.district}
                  disabled={disableDis}
                />
              </Col>
              <Col span={12}>
                <SelectField
                  name='user_departments'
                  label='Departments'
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  options={
                    department?.map((item) => {
                      return {
                        value: item.id,
                        label: item.name,
                      };
                    }) || []
                  }
                />
              </Col>
              <Col span={12}>
                <InputField
                  name='address'
                  label='Address'
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  type={<Input />}
                  rules={validateFrom.address}
                />
              </Col>
              <Col span={12}>
                <InputField
                  name='birthday'
                  label='Date of Birth'
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  type={<DatePicker format={'YYYY/MM/DD'} style={{ width: '100%' }} />}
                  rules={validateFrom.birhtday}
                />
              </Col>
              <Col span={12}>
                <Dragger
                  name='avatar'
                  beforeUpload={() => {
                    return false;
                  }}
                  onChange={(data) => {
                    const { status } = data.file;
                    if (status !== 'uploading') {
                      console.log(data.file, data.fileList);
                    }
                    if (status === 'done') {
                      toast.success(`${data.file.name} file uploaded successfully.`);
                    } else if (status === 'error') {
                      toast.error(`${data.file.name} file upload failed.`);
                    }
                  }}
                >
                  <span className='ant-upload-text'>Click or drag file to this area to upload</span>
                </Dragger>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default UserForm;
