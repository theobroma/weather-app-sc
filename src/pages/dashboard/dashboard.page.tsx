import { CheckboxField } from '@components/checkbox/checkbox-field/checkbox-field';
import { FormRow } from '@components/form/common.styles';
import { noop } from '@utils/noop.util';
import { Formik, Form } from 'formik';

const DashboardPage = () => (
  <>
    <Formik
      initialValues={{
        checkboxDisabledChecked: true,
      }}
      //   validationSchema={validationSchema}
      validateOnMount
      validateOnChange
      onSubmit={noop}
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

export default DashboardPage;
