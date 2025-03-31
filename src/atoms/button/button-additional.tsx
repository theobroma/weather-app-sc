import { Button } from './button';
import { ButtonProps } from './button.props';
import { ButtonAdditionalStyles } from './button.style';

export const ButtonAdditional = (props: Omit<ButtonProps, 'Component'>) => (
  <Button {...props} Component={ButtonAdditionalStyles} />
);
