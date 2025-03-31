const fontFamily = { fontFamily: 'Roboto' };
const letterSpacing = { letterSpacing: '0.02em' };

export const textTypography = {
  Body1: {
    ...fontFamily,
    ...letterSpacing,
    fontSize: 16,
    lineHeight: 1.5,
  },
  Body2: {
    ...fontFamily,
    ...letterSpacing,
    fontSize: 14,
    lineHeight: 1.5,
  },
  LabelFont: {
    ...fontFamily,
    ...letterSpacing,
    fontSize: 14,
    lineHeight: 1.16,
  },
  ButtonBig: {
    ...fontFamily,
    ...letterSpacing,
    fontSize: 18,
    lineHeight: 1,
  },
};
