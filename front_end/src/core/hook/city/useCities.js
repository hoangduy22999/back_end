import { useEffect, useState } from 'react';
import cityServices from '@/core/services/city';

const useCities = () => {
  const [cities, setCities] = useState();
  const getListCities = async () => {
    try {
      const res = await cityServices.getListCities();
      setCities(res);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getListCities();
  }, []);

  return { getListCities, cities };
};

export default useCities;
