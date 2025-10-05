import { Form, Formik } from 'formik';

import { CheckboxField } from '@/components/checkbox/checkbox-field/checkbox-field';
import { FormRow } from '@/components/form/common.styles';
import { SectionWrapper } from '@/pages/dashboard/dashboard.page.styles';

import { useDashboardForm } from './dashboard-form.hook';

const DashboardForm = () => {
  const { initialValues, handleSubmit } = useDashboardForm();

  return (
    <SectionWrapper>
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
            <button className="Button" type="submit">
              Submit
            </button>
          </FormRow>
        </Form>
      </Formik>
    </SectionWrapper>
  );
};

export default DashboardForm;
