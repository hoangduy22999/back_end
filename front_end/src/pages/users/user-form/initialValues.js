export const userFormInitialValues = (item) => {
  return {
    email: item?.email || undefined,
    phone: item?.phone || undefined,
    district_id: item?.district_id || undefined,
    user_departments: item?.user_departments || undefined,
    address: item?.address || undefined,
    birthday: item?.birthday || undefined,
  };
};
