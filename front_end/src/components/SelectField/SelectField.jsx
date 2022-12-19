import { Form, Select } from 'antd';
const SelectField = ({
  name,
  error,
  label,
  labelCol,
  wrapperCol,
  rules,
  response,
  placeholder,
  options,
  mode,
  disabled,
  className,
  children,
  dependId,
  onChange,
}) => {
  const getDepend = () => document.querySelector(`#${dependId || name}-select`);
  return (
    <div id={`${dependId || name}-select`} style={{ position: 'relative' }}>
      <Form.Item
        className={className}
        name={name}
        label={label}
        labelCol={labelCol}
        wrapperCol={wrapperCol}
        rules={rules}
        help={
          response?.message?.[error] &&
          response?.message?.[error].length &&
          response?.message?.[error][0]
        }
        validateStatus={
          response?.message?.[error] && response?.message?.[error].length ? 'error' : ''
        }
        style={{ padding: '10px 20px' }}
      >
        <Select
          placeholder={placeholder}
          disabled={disabled}
          mode={mode}
          getPopupContainer={getDepend}
          onChange={onChange}
        >
          {children
            ? children
            : options?.map((option, index) => (
                <Select.Option key={index} value={option.value}>
                  {option.label || ''}
                </Select.Option>
              ))}
        </Select>
      </Form.Item>
    </div>
  );
};

export default SelectField;
