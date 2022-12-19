// import React from 'react'

import useDetailDepartment from '@/core/hook/department/useDetailDepartment';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DepartmentForm from '../department-form';

const UpdateDepartment = () => {
  const { detailDepartment, getDetailDepartment } = useDetailDepartment();
  const { id } = useParams();

  useEffect(() => {
    getDetailDepartment(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <DepartmentForm data={detailDepartment} />
    </div>
  );
};

export default UpdateDepartment;
