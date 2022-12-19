const validateFrom = {
  email: [{ required: true, message: 'Vui lòng nhập Email hợp lệ.' }],
  password: [
    {
      required: true,
      message: 'Trường này không được để trống.',
    },
    {
      min: 8,
      message: 'Vui lòng nhập tối thiểu 8 ký tự.',
    },
    {
      pattern: new RegExp(/\d/),
      message: 'Trường Mật khẩu phải chứa ít nhất một số.',
    },
    {
      pattern: new RegExp(/^(?:(?=.*[a-z])(?=.*[A-Z]).*)$/),
      message: 'Trường Mật khẩu phải chứa ít nhất một chữ hoa và một chữ thường.',
    },
    {
      pattern: new RegExp(/^\S*$/u),
      message: 'Mật khẩu không được chứa khoảng trắng.',
    },
  ],
  district: [{ required: true, message: 'Vui lòng nhập quận/huyện.' }],
  birhtday: [{ required: true, message: 'Vui lòng nhập ngày sinh.' }],
  address: [{ required: true, message: 'Vui lòng nhập địa chỉ.' }],
};

export default validateFrom;
