import { FC, SVGProps } from 'react';
import Check from '@assets/icons/check.svg?react';
import Trash from '@assets/icons/trash.svg?react';
import { IconEnum } from '@enums/icon.enum';

export const iconOptions: Record<IconEnum, FC<SVGProps<SVGSVGElement>>> = {
  [IconEnum.Check]: Check,
  [IconEnum.Trash]: Trash,
};
