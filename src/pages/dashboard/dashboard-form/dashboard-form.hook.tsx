export const useDashboardForm = () => {
  const handleSubmit = (values: any) => {
    console.log('values :>> ', values);
  };

  return {
    initialValues: {
      checkboxDisabledChecked: true,
    },
    handleSubmit,
  };
};
