import HeaderHome from '@/components/HeaderHome';
import { ToastContainer } from 'react-toastify';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../Footer';
const { Header, Content, Sider } = Layout;

const MenuItem = ({ item, key }) => {
  const { icon, label, path } = item;
  return (
    <NavLink className='nav-link' to={path}>
      <Menu.Item key={key}>
        {icon}
        {label}
      </Menu.Item>
    </NavLink>
  );
};

const items = [
  {
    icon: <TeamOutlined />,
    label: 'Users',
    path: '/',
  },
  {
    icon: <PieChartOutlined />,
    label: 'Department',
    path: '/department',
  },
  {
    icon: <FileOutlined />,
    label: 'Forgot Password',
    path: '/forgot-password',
  },
  {
    icon: <DesktopOutlined />,
    label: 'Reset Password',
    path: '/reset_password',
  },
  {
    icon: <UserOutlined />,
    label: 'My Profile',
    path: '/profile',
  },
];

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Layout className='side-bar'>
        <ToastContainer position='bottom-right' autoClose={2000} closeOnClick />
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div>
            <img src='/images/logo.webp' alt='logo' className='side-logo' />
          </div>
          <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline' className='side-bar-menu'>
            {items.map((item, i) => (
              <MenuItem key={i} item={item} />
            ))}
          </Menu>
        </Sider>
        <Layout className='site-layout'>
          <Header className='admin-header'>
            <HeaderHome />
          </Header>
          <Content className='layout-wrapper'>
            <div className='layout-content'>
              <Outlet />
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </>
  );
};
export default AdminLayout;
