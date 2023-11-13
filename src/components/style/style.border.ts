import { Property } from 'csstype';
import { ColorEnum } from '../../enums/color.enum';
import { isExist } from '../../utils/is-data.util';

interface DirectionProps {
  hasTopBorder: boolean;
  hasRightBorder: boolean;
  hasBottomBorder: boolean;
  hasLeftBorder: boolean;
}

interface BorderProps {
  width: number;
  style: Property.BorderStyle;
  directions: Partial<DirectionProps>;
}

const initialProps: Omit<BorderProps, 'directions'> = {
  width: 1,
  style: 'solid',
};

export const StyleBorder = {
  Border: (
    borderColor: ColorEnum,
    { width = initialProps.width, style = initialProps.style, directions }: Partial<BorderProps> = initialProps,
  ) => {
    if (directions) {
      return {
        borderColor,
        borderStyle: style,
        borderTopWidth: isExist(directions.hasTopBorder) ? width : 0,
        borderRightWidth: isExist(directions.hasRightBorder) ? width : 0,
        borderBottomWidth: isExist(directions.hasBottomBorder) ? width : 0,
        borderLeftWidth: isExist(directions.hasLeftBorder) ? width : 0,
      };
    }

    return {
      border: `${width}px ${style} ${borderColor}`,
    };
  },
  Radius: (topLeft = 8, topRight = topLeft, bottomRight = topLeft, bottomLeft = topLeft) => ({
    borderTopLeftRadius: topLeft,
    borderTopRightRadius: topRight,
    borderBottomRightRadius: bottomRight,
    borderBottomLeftRadius: bottomLeft,
  }),
  RoundedRadius: {
    borderRadius: '50%',
  },
};
