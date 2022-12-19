import { useEffect } from 'react';
import cityServices from '@/core/services/city';

const useCity = () => {
  const getCityDetail = async (id) => {
    try {
      const res = await cityServices.getCityDetail(id);
      return res;
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getCityDetail();
  }, []);

  return { getCityDetail };
};

export default useCity;
