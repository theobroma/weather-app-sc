import { Button } from './button';
import { ButtonProps } from './button.props';
import { ButtonAccentStyles } from './button.style';

export const ButtonAccent = (props: Omit<ButtonProps, 'Component'>) => (
  <Button {...props} Component={ButtonAccentStyles} />
);
