export const getInitialDepartmentValues = (data) => {
  return {
    id: data?.id || undefined,
    name: data?.name || undefined,
    manager_id: data?.manager_id || 1,
  };
};
