import { ColorEnum } from '../../enums/color.enum';

type ColorType = {
  [key in keyof typeof ColorEnum & string as `${key}Bg`]: {
    backgroundColor: string;
  };
};

export const StyleColors: ColorType = Object.entries(ColorEnum).reduce(
  (acc, [key, color]) => ({ ...acc, [`${key}Bg`]: { backgroundColor: color } }),
  {} as ColorType,
);
