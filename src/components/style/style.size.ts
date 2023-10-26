export const StyleSize = {
  FullWidth: {
    width: '100%',
  },
  MinContentWidth: {
    width: 'min-content',
  },
  MaxContentWidth: {
    width: 'max-content',
  },
  PercentageWidth: (width: number) => ({
    width: `${width}%`,
  }),
  Width: (width: number) => ({
    width: width,
  }),
  MinWidth: (minWidth: number) => ({
    minWidth: minWidth,
  }),
  MaxWidth: (maxWidth: number) => ({
    maxWidth: maxWidth,
  }),
  FullHeight: {
    height: '100%',
  },
  ContentHeight: {
    height: 'max-content',
  },
  Height: (height: number) => ({
    height: height,
  }),
  MinHeight: (minHeight: number) => ({
    minHeight: minHeight,
  }),
  MaxHeight: (maxHeight: number) => ({
    maxHeight: maxHeight,
  }),
  Padding: (...sizes: number[]) => ({
    padding: sizes.join(' '),
  }),
  PaddingTop: (size: number) => ({
    paddingTop: size,
  }),
  PaddingBottom: (size: number) => ({
    paddingBottom: size,
  }),
  PaddingLeft: (size: number) => ({
    paddingLeft: size,
  }),
  PaddingRight: (size: number) => ({
    paddingRight: size,
  }),
  Margin: (...sizes: number[]) => ({
    margin: sizes.join(' '),
  }),
  MarginHorizontalAuto: {
    margin: '0 auto',
  },
  MarginTop: (size: number) => ({
    marginTop: size,
  }),
  MarginRight: (size: number) => ({
    marginRight: size,
  }),
  MarginBottom: (size: number) => ({
    marginBottom: size,
  }),
  MarginLeft: (size: number) => ({
    marginLeft: size,
  }),
};
