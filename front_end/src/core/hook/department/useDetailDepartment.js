import departmentServices from '@/core/services/department';
import { useEffect, useState } from 'react';

const useDetailDepartment = () => {
  const [detailDepartment, setDetailDepartment] = useState();

  const getDetailDepartment = async (id) => {
    try {
      const res = await departmentServices.getDetailDepartment(id);
      setDetailDepartment(res.record);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    detailDepartment,
    getDetailDepartment,
  };
};

export default useDetailDepartment;
