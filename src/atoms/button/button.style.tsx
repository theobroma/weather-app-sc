import { ButtonProps } from '@/atoms/button/button.props';
import { Style } from '@/components/style';
import { getSize } from '@/components/style/style.util';
import { textTypography } from '@/components/style/text/text.typography';
import { ColorEnum } from '@/enums/color.enum';
import styled, { css } from 'styled-components';

const smallButtonStyles = css`
  padding: 0 ${getSize(24)};
  height: ${getSize(48)};
`;

const bigButtonStyles = css`
  padding: 0 ${getSize(32)};
  height: ${getSize(56)};
`;

const DISABLED_COLOR = ColorEnum.Grey200;

export const buttonStyles = css`
  border: 0;
  outline: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  border-radius: ${getSize(8)};

  &:focus,
  &:active {
    outline: none;
  }

  &:disabled {
    cursor: default;
    pointer-events: none;
    color: ${DISABLED_COLOR};
    background-color: ${ColorEnum.Grey50};
  }
`;

export const ButtonStyle = styled.button<ButtonProps>`
  ${buttonStyles}

  ${({ isFull = false }) => isFull && 'width: 100%;'}
    ${({ isSmall = false }) => (isSmall ? smallButtonStyles : bigButtonStyles)}

    ${textTypography.ButtonBig}
`;

export const buttonPrimaryStyles = css`
  color: ${ColorEnum.White};
  background-color: ${ColorEnum.Primary500};

  &:hover {
    background-color: ${ColorEnum.Primary600};
  }

  &:active {
    background-color: ${ColorEnum.Primary700};
  }
`;

export const ButtonPrimaryStyles = styled(ButtonStyle)`
  color: ${ColorEnum.White};
  ${buttonPrimaryStyles}
`;

export const buttonSecondaryStyles = css`
  background-color: ${ColorEnum.White};
  border: 2px solid ${ColorEnum.Primary100};
  color: ${ColorEnum.Primary500};

  &:hover {
    background-color: ${ColorEnum.Primary25};
  }

  &:active {
    background-color: ${ColorEnum.Primary50};
  }

  &:hover &:active {
    border: 2px solid ${ColorEnum.Primary200};
  }

  &:disabled {
    border: 2px solid ${ColorEnum.Grey25};
  }
`;

export const ButtonSecondaryStyles = styled(ButtonStyle)`
  color: ${ColorEnum.Primary500};
  ${buttonSecondaryStyles}
`;

export const buttonTertiaryStyles = css`
  background-color: ${ColorEnum.Tertiary25};
  border: 2px solid ${ColorEnum.Tertiary200};
  color: ${ColorEnum.Tertiary500};

  &:hover {
    background-color: ${ColorEnum.Tertiary50};
  }

  &:active {
    background-color: ${ColorEnum.Tertiary100};
  }

  &:disabled {
    border: 2px solid ${ColorEnum.Grey25};
  }
`;

export const ButtonTertiaryStyles = styled(ButtonStyle)`
  color: ${ColorEnum.Tertiary500};
  ${buttonTertiaryStyles}
`;

export const buttonAdditionalStyles = css`
  background-color: ${ColorEnum.White};
  border: 2px solid ${ColorEnum.Grey100};
  color: ${ColorEnum.Grey700};

  &:hover {
    background-color: ${ColorEnum.Grey25};
  }

  &:active {
    background-color: ${ColorEnum.Grey50};
  }

  &:hover &:active {
    border: 2px solid ${ColorEnum.Grey200};
  }

  &:disabled {
    border: 2px solid ${ColorEnum.Grey25};
  }
`;

export const ButtonAdditionalStyles = styled(ButtonStyle)`
  color: ${ColorEnum.Grey700};
  ${buttonAdditionalStyles}
`;

export const buttonAccentStyles = css`
  background-color: ${ColorEnum.Accent400};
  color: ${ColorEnum.White};

  &:hover {
    background-color: ${ColorEnum.Accent600};
  }

  &:active {
    background-color: ${ColorEnum.Accent700};
  }

  &:disabled {
    color: ${ColorEnum.White};
    background-color: ${ColorEnum.Accent50};
  }
`;

export const ButtonAccentStyles = styled(ButtonStyle)`
  ${buttonAccentStyles}
`;

export const ButtonTransparentStyle = styled(ButtonStyle)`
  background-color: transparent;
  padding: 0;
  height: 100%;
  border-radius: 0;
  font-size: inherit;
  line-height: inherit;

  &:disabled {
    opacity: 0.4;
    color: inherit;
    background-color: inherit;
  }
`;

export const ButtonPrimaryTransparentStyle = styled(ButtonTransparentStyle)`
  ${Style.Semi.Primary500.Apply}

  &:hover {
    text-decoration: underline;
  }
`;
