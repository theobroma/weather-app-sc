import { Checkbox } from '@components/checkbox/checkbox';
import { CheckBoxProps } from '@components/checkbox/checkbox.interface';
import { ErrorWrapper } from '@components/checkbox/checkbox.styles';
import { FieldError } from '@components/field-error/field-error';
import { useField } from 'formik';

import { CheckboxFieldWrapper } from './checkbox-field.styles';

interface CheckboxFieldProps extends Pick<CheckBoxProps, 'disabled' | 'title'> {
  name: string;
}

export const CheckboxField = ({ disabled, name, title }: CheckboxFieldProps) => {
  const [{ value }, , { setValue }] = useField(name);
  const isChecked = Boolean(value);

  return (
    <CheckboxFieldWrapper>
      <Checkbox disabled={disabled} isChecked={isChecked} onChange={setValue} title={title} isGreyTitle />
      <ErrorWrapper>
        <FieldError name={name} />
      </ErrorWrapper>
    </CheckboxFieldWrapper>
  );
};
