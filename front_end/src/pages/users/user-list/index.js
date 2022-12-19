/* eslint-disable react-hooks/exhaustive-deps */
import TableRowAction from '@/components/TableRowAction';
import useUsers from '@/core/hook/users/useUsers';
import { Table } from 'antd';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ListUsers = () => {
  const navigate = useNavigate();

  const { getAllUsers, listUsers } = useUsers();
  const onEdit = (row) => () => {
    navigate(`user-update/${row.id}`);
  };
  const onDelete = () => {};

  const columns = [
    {
      key: 'name',
      title: 'Name',
      render: (_, record) => {
        <span>
          {record?.first_name} {record?.last_name}
        </span>;
      },
    },
    {
      key: 'address',
      dataIndex: 'address',
      title: 'Address',
      align: 'center',
    },
    {
      key: 'birthday',
      dataIndex: 'birthday',
      title: 'Birthday',
      align: 'center',
    },
    {
      key: 'gender',
      dataIndex: 'gender',
      title: 'Gender',
      align: 'center',
    },
    {
      key: 'email',
      dataIndex: 'email',
      title: 'Email',
      align: 'center',
    },
    {
      key: 'phone',
      dataIndex: 'phone',
      title: 'Phone',
      align: 'center',
    },
    {
      key: 'tool',
      dataIndex: 'tool',
      title: '',
      align: 'center',
      headerAlign: 'center',
      render: (cell, record) => (
        <TableRowAction
          //   confirmLoading={loadingDeleteUser}
          record={record}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ),
    },
  ];

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div>
      <button>
        <Link to='/user-create' style={{ color: '#fff', fontSize: '14px' }}>
          Add User
        </Link>
      </button>
      <Table rowKey='id' columns={columns} dataSource={listUsers} bordered scroll={{ x: 1000 }} />
    </div>
  );
};

export default ListUsers;
