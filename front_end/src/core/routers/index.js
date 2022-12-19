import AdminLayout from '@/components/Layout/AdminLayout';
import AuthLayout from '@/components/Layout/AuthLayout';
import AwaitResetPass from '@/pages/await-reset-password';
import CreateDepartment from '@/pages/department/create-department/index.jsx';
import ListDepartment from '@/pages/department/list-department/index.jsx';
import UpdateDepartment from '@/pages/department/update-department/index.jsx';
import ForgotPassword from '@/pages/forgot-password';
import Login from '@/pages/login';
import Profile from '@/pages/profile';
import ResetPassword from '@/pages/reset-password';
import CreateUser from '@/pages/users/create-user';
import UpdateUser from '@/pages/users/update-user';
import ListUsers from '@/pages/users/user-list/index.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const AppRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />} />
        <Route path='/' element={<AdminLayout />}>
          <Route
            index
            element={
              <PrivateRoute>
                <ListUsers />
              </PrivateRoute>
            }
          />
          <Route path='user-create' element={<CreateUser />} />
          <Route path='user-update/:id' element={<UpdateUser />} />

          <Route path='department-create' element={<CreateDepartment />} />
          <Route path='department-update/:id' element={<UpdateDepartment />} />
          <Route path='department' element={<ListDepartment />} />

          <Route path='profile' element={<Profile />} />
        </Route>

        <Route
          path='/login'
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path='/forgot-password'
          element={
            <AuthLayout>
              <ForgotPassword />
            </AuthLayout>
          }
        />
        <Route
          path='/reset_password'
          element={
            <AuthLayout>
              <ResetPassword />
            </AuthLayout>
          }
        />
        <Route
          path='/await-reset-password'
          element={
            <AuthLayout>
              <AwaitResetPass />
            </AuthLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouters;
