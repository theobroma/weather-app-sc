import { useField } from 'formik';

import { isExist } from '@utils/is-data.util';

import { LabelError } from './field-error.styles';

interface InputErrorProps {
  name: string;
}

export const FieldError = ({ name }: InputErrorProps) => {
  const [, { error }] = useField(name);

  if (!isExist(error)) {
    return null;
  }

  return <LabelError>{error}</LabelError>;
};
