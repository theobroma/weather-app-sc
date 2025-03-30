import { Formik, Form } from 'formik';

import { CheckboxField } from '@components/checkbox/checkbox-field/checkbox-field';
import { FormRow } from '@components/form/common.styles';
import { useDashboardForm } from './dashboard-form.hook';

const DashboardForm = () => {
  const { initialValues, handleSubmit } = useDashboardForm();

  return (
    <>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        // validateOnMount
        // validateOnChange
        onSubmit={handleSubmit}
      >
        <Form>
          <FormRow sizes={8}>
            <CheckboxField name="checkboxDefault" title="Default" />
            <CheckboxField name="checkboxDisabledChecked" title="Disabled" disabled />
            <CheckboxField name="checkboxDisabled" title="Disabled" disabled />
          </FormRow>
        </Form>
      </Formik>
    </>
  );
};

export default DashboardForm;
