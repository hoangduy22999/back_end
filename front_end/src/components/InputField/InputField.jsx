import { Form } from 'antd';
const InputField = ({
  label,
  name,
  error,
  labelCol,
  wrapperCol,
  rules,
  response,
  type,
  className,
  dependencies,
  value,
}) => {
  return (
    <Form.Item
      className={className}
      label={label}
      name={name}
      labelCol={labelCol}
      wrapperCol={wrapperCol}
      rules={rules}
      dependencies={dependencies}
      value={value}
      hasFeedback
      help={
        response?.data?.[error] &&
        response?.data?.[error] &&
        response?.data?.[error][0]
      }
      validateStatus={
        (response?.message?.[error] && response?.message?.[error].length) ||
        response?.data?.[error]
          ? 'error'
          : ''
      }
      style={{ padding: '10px 20px' }}
    >
      {type}
    </Form.Item>
  );
};

export default InputField;
