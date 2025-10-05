import { ButtonProps } from '@/atoms/button/button.props';
import { ButtonTertiaryStyles } from '@/atoms/button/button.style';

import { Button } from './button';

export const ButtonTertiary = (props: Omit<ButtonProps, 'Component'>) => (
  <Button {...props} Component={ButtonTertiaryStyles} />
);
