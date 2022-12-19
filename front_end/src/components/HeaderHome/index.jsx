import useLogout from '@/core/hook/auth/useLogout';
import { Dropdown } from 'antd';

const Header = () => {
  const { Logout } = useLogout();
  const items = [
    {
      label: <a href='#'>1st menu item</a>,
      key: '0',
    },
    {
      type: 'divider',
    },
    {
      label: <a href='#'>2nd menu item</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];

  return (
    <div className='header-home'>
      <button onClick={Logout} className='logout-btn'>
        Logout
      </button>
      <Dropdown
        menu={{
          items,
        }}
        trigger={['click']}
      >
        <a onClick={(e) => e.preventDefault()}>
          <button>Options</button>
        </a>
      </Dropdown>
    </div>
  );
};

export default Header;
