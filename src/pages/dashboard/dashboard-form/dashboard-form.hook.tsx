export const useDashboardForm = () => {
  const handleSubmit = (values: any) => {
    console.log('values :>> ', values);
  };

  return {
    initialValues: {
      checkboxDefault: false,
      checkboxDisabledChecked: true,
      checkboxDisabled: false,
    },
    handleSubmit,
  };
};
