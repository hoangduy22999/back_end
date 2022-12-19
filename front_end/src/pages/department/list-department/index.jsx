// import React from 'react';

import TableRowAction from '@/components/TableRowAction/index.jsx';
import useDepartment from '@/core/hook/department/useDepartment';
import { Table } from 'antd';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ListDepartment = () => {
  const navigate = useNavigate();
  const { department, getListDepartments } = useDepartment();

  const onEdit = (row) => () => {
    navigate(`/department-update/${row.id}`);
  };
  const onDelete = () => {};
  const columns = [
    {
      key: 'name',
      dataIndex: 'name',
      title: 'Name',
      align: 'center',
    },
    {
      key: 'manager',
      dataIndex: 'manager',
      title: 'Manager',
      align: 'center',
      render: (_, record) => <p>{record?.manager?.email}</p>,
    },
    {
      key: 'users',
      dataIndex: 'users',
      title: 'Users',
      align: 'center',
      render: (_, record) => {
        return record?.users.map((item, i) => <p key={i}>{item.email}</p>);
      },
    },
    {
      key: 'tool',
      dataIndex: 'tool',
      title: '',
      align: 'center',
      headerAlign: 'center',
      render: (cell, record) => (
        <TableRowAction record={record} onDelete={onDelete} onEdit={onEdit} />
      ),
    },
  ];

  useEffect(() => {
    getListDepartments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <button>
        <Link to='/department-create' style={{ color: '#fff', fontSize: '14px' }}>
          Add Department
        </Link>
      </button>
      <Table rowKey='id' columns={columns} dataSource={department} bordered scroll={{ x: 1000 }} />
    </div>
  );
};

export default ListDepartment;
