import { getSize, getUnitSize } from './style.util';

export const StyleSize = {
  Width: (width: string | number) => ({
    width: getSize(width),
  }),
  MinWidth: (minWidth: string | number) => ({
    minWidth: getSize(minWidth),
  }),
  Height: (height: string | number) => ({
    height: getSize(height),
  }),
  MinHeight: (minHeight: string | number) => ({
    minHeight: getSize(minHeight),
  }),
  MaxHeight: (maxHeight: string | number) => ({
    maxHeight: getSize(maxHeight),
  }),
  FullWidth: {
    width: '100%',
  },
  FullHeight: {
    height: '100%',
  },
  Padding: (...sizes: number[]) => ({
    padding: sizes.map((size) => getUnitSize(size)).join(' '),
  }),
  PaddingTop: (size: number) => ({
    paddingTop: getUnitSize(size),
  }),
  PaddingBottom: (size: number) => ({
    paddingBottom: getUnitSize(size),
  }),
  PaddingLeft: (size: number) => ({
    paddingLeft: getUnitSize(size),
  }),
  PaddingRight: (size: number) => ({
    paddingRight: getUnitSize(size),
  }),
  Margin: (...sizes: number[]) => ({
    margin: sizes.map((size) => getUnitSize(size)).join(' '),
  }),
  MarginHorizontalAuto: {
    margin: '0 auto',
  },
  MarginTop: (size: number) => ({
    marginTop: getUnitSize(size),
  }),
  MarginRight: (size: number) => ({
    marginRight: getUnitSize(size),
  }),
  MarginBottom: (size: number) => ({
    marginBottom: getUnitSize(size),
  }),
  MarginLeft: (size: number) => ({
    marginLeft: getUnitSize(size),
  }),
};
