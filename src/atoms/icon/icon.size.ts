import { IconSizeEnum } from './icon.enum';
import { IconSizeInterface } from './icon.interface';

export const sizes: Record<Exclude<IconSizeEnum, IconSizeEnum.CustomSize>, IconSizeInterface> = {
  [IconSizeEnum.Xs]: {
    width: 12,
    height: 12,
  },
  [IconSizeEnum.S]: {
    width: 16,
    height: 16,
  },
  [IconSizeEnum.M]: {
    width: 20,
    height: 20,
  },
  [IconSizeEnum.L]: {
    width: 24,
    height: 24,
  },
  [IconSizeEnum.Xl]: {
    width: 28,
    height: 28,
  },
  [IconSizeEnum.XXl]: {
    width: 32,
    height: 32,
  },
};
