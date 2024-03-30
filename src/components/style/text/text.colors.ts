import { ColorEnum } from '@enums/color.enum';

type ColorType = {
  [key in keyof typeof ColorEnum]: {
    color: string;
  };
};

export const textColors: ColorType = Object.entries(ColorEnum).reduce(
  (acc, [key, color]) => ({ ...acc, [key]: { color } }),
  {},
) as ColorType;
