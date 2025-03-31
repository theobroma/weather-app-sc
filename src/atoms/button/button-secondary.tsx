import { ButtonProps } from '@atoms/button/button.props';
import { ButtonSecondaryStyles } from '@atoms/button/button.style';

import { Button } from './button';

export const ButtonSecondary = (props: Omit<ButtonProps, 'Component'>) => (
  <Button {...props} Component={ButtonSecondaryStyles} />
);
