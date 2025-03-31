import { Button } from './button';
import { ButtonProps } from './button.props';
import { ButtonPrimaryStyles } from './button.style';

export const ButtonPrimary = (props: Omit<ButtonProps, 'Component'>) => (
  <Button {...props} Component={ButtonPrimaryStyles} />
);
