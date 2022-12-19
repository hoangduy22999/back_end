import { useEffect, useState } from 'react';
import departmentServices from '@/core/services/department';

const useDepartment = () => {
  const [department, setDepartment] = useState();
  const getListDepartments = async () => {
    try {
      const res = await departmentServices.getListDepartment();
      setDepartment(res);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    // getListDepartments();
  }, []);

  return { getListDepartments, department };
};

export default useDepartment;
