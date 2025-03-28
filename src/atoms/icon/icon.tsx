import { LegacyRef, memo, useRef } from 'react';

import { IconSizeEnum } from '@atoms/icon/icon.enum';
import { isString } from '@utils/is-data.util';

import { IconProps } from './icon.interface';
import { iconOptions } from './icon.options';
import { sizes } from './icon.size';

export const Icon = memo(({ name, size, color = 'currentColor' }: IconProps) => {
  const Component = iconOptions[name];
  const currentSize = isString(size) && size !== IconSizeEnum.CustomSize ? sizes[size] : {};

  const iconRef = useRef<SVGSVGElement>();

  return <Component {...currentSize} fill={color} ref={iconRef as LegacyRef<SVGSVGElement>} />;
});
