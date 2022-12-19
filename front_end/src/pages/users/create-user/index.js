/* eslint-disable no-console */
import useCreateUser from '@/core/hook/users/useCreateUser';
import { useSelector } from 'react-redux';
import UserForm from '../user-form/index.js';

const CreateUser = () => {
  const { resCreateUser } = useSelector((state) => state.user);
  const { CreateUser } = useCreateUser();

  return <UserForm onSave={CreateUser} response={resCreateUser} />;
};

export default CreateUser;
