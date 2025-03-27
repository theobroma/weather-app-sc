import styled, { css } from 'styled-components';

import { FieldErrorWrapper } from '@components/field-error/field-error.styles';
import { Style } from '@components/style';
import { getSize } from '@components/style/style.util';
import { ColorEnum } from '@enums/color.enum';

interface CheckBoxProps {
  isChecked: boolean;
  isDisabled: boolean;
  isGreyTitle: boolean;
}

const checkboxStyles = css`
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Input = styled.input``;

export const CheckBoxLabel = styled.label<Pick<CheckBoxProps, 'isDisabled'>>`
  display: inline-flex;
  align-items: center;
  min-height: ${getSize(24)};
  user-select: none;

  ${({ isDisabled }) => !isDisabled && checkboxStyles}
`;

export const CheckBoxWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
`;

export const CheckBoxIconWrapper = styled.div<Omit<CheckBoxProps, 'isGreyTitle'>>`
  min-width: ${getSize(18)};
  width: ${getSize(18)};
  height: ${getSize(18)};
  border-radius: ${getSize(4)};
  box-shadow: 0 0 0 2px ${({ isChecked }) => (isChecked ? ColorEnum.Primary500 : ColorEnum.Grey300)};
  /* FlexCenter */
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';

  opacity: ${({ isChecked, isDisabled }) => (isDisabled && isChecked ? '0.5' : null)};
`;

export const CheckBoxTitle = Style.Body2.MarginLeft(12).SpanStyled<Pick<CheckBoxProps, 'isGreyTitle'>>`
    white-space: pre-wrap;
    color: ${({ isGreyTitle }) => (isGreyTitle ? ColorEnum.Grey500 : ColorEnum.Black)};
`;

export const ChildrenWrapper = Style.MarginLeft(8).Div;

export const ErrorWrapper = styled(FieldErrorWrapper)``;
