import { css } from 'styled-components';

import { Style } from '@/components/style';
import { getSize } from '@/components/style/style.util';

interface IconWrapperProps {
  isLeft?: boolean;
}

const leftMarginStyle = css`
  margin-left: ${getSize(8)};
`;

const rightMarginStyle = css`
  margin-right: ${getSize(8)};
`;

export const IconWrapper = Style.Flex.PointerNone.DivStyled<IconWrapperProps>`
    ${({ isLeft = false }) => (isLeft ? rightMarginStyle : leftMarginStyle)}
`;
