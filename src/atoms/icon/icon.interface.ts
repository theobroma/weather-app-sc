import { ColorEnum } from '@/enums/color.enum';
import { IconEnum } from '@/enums/icon.enum';

import { IconSizeEnum } from './icon.enum';

export interface IconProps {
  name: IconEnum;
  size: IconSizeEnum;
  color?: ColorEnum | 'currentColor';
}

export interface IconSizeInterface {
  width: number;
  height: number;
}
