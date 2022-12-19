// import React from 'react';

import { useNavigate } from 'react-router-dom';

const ButtonGroup = () => {
  const navigate = useNavigate();

  return (
    <div className='button-group'>
      <button onClick={() => navigate(-1)}>Cancle</button>
      <button type='submit'>Add</button>
    </div>
  );
};

export default ButtonGroup;
