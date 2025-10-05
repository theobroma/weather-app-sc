import { CSSProperties } from 'react';
import { noop } from '@utils/noop.util';
import { combine } from 'flexible-chain';
import styleToCss from 'style-object-to-css-string';
import styled from 'styled-components';

import { flexStyles } from './flex';
import { StyleBorder } from './style.border';
import { StyleColors } from './style.colors';
import { StyleGrid } from './style.grid';
import { StyleOthers } from './style.others';
import { StyleSize } from './style.size';
import { textStyles } from './text';

const getStyle =
  ({ dependFn = noop, ...props }: any) =>
  (componentProps: any): any => ({
    ...props,
    ...dependFn(componentProps),
  });

const styles = {
  ...StyleBorder,
  ...StyleColors,
  ...StyleOthers,
  ...StyleGrid,
  ...StyleSize,
  ...textStyles,
  ...flexStyles,
};

const textTags = {
  Paragraph: <T extends object>(props: CSSProperties) => styled.p<T>(getStyle(props)),
  ParagraphStyled: <T extends object>(props: CSSProperties) => styled(textTags.Paragraph<T>(props)),
  Span: <T extends object>(props: CSSProperties) => styled.span<T>(getStyle(props)),
  SpanStyled: <T extends object>(props: CSSProperties) => styled(textTags.Span<T>(props)),
  Br: <T extends object>(props: CSSProperties) => styled.br<T>(getStyle(props)),
  H1: (props: CSSProperties) => styled.h1(getStyle(props)),
  H2: (props: CSSProperties) => styled.h2(getStyle(props)),
  H3: (props: CSSProperties) => styled.h3(getStyle(props)),
  H4: (props: CSSProperties) => styled.h4(getStyle(props)),
  H5: (props: CSSProperties) => styled.h5(getStyle(props)),
  H6: (props: CSSProperties) => styled.h6(getStyle(props)),
  A: (props: CSSProperties) => styled.a(getStyle(props)),
};

const otherTags = {
  Div: <T extends object>(props: CSSProperties) => styled.div<T>(getStyle(props)),
  DivStyled: <T extends object>(props: CSSProperties) => styled(otherTags.Div<T>(props)),
  Ul: (props: CSSProperties) => styled.ul(getStyle(props)),
  UlStyled: (props: CSSProperties) => styled(otherTags.Ul(props)),
  Li: (props: CSSProperties) => styled.li(getStyle(props)),
  Image: (props: CSSProperties) => styled.img(getStyle(props)),
  ImageStyled: (props: CSSProperties) => styled(otherTags.Image(props)),
  Label: (props: CSSProperties) => styled.label(getStyle(props)),

  Apply: (props: CSSProperties) => styleToCss(props),

  ...textTags,
};

export const Style = combine(styles, otherTags);
