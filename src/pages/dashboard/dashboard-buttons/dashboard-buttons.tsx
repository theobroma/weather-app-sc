import { ButtonTertiary } from '@/atoms/button/button-tertiary';
import { ButtonAdditional } from '@/atoms/button/button-additional';
import { ButtonSecondary } from '@/atoms/button/button-secondary';
import { IconWrapper } from '@/atoms/icon/icon-wrapper.styles';
import { Icon } from '@/atoms/icon/icon';
import { IconSizeEnum } from '@/atoms/icon/icon.enum';
import { IconEnum } from '@enums/icon.enum';
import { ButtonAccent } from '@/atoms/button/button-accent';
import { ButtonPrimary } from '@/atoms/button/button-primary';
import { ButtonTransparent } from '@/atoms/button/button-transparent';
import { SectionWrapper, VerticalStack, HorizontalStack } from '@pages/dashboard/dashboard.page.styles';

export const DashboardButtons = () => (
  <SectionWrapper>
    <VerticalStack>
      <HorizontalStack>
        <ButtonAccent>
          ButtonAccent
          <IconWrapper>
            <Icon size={IconSizeEnum.L} name={IconEnum.Trash} />
          </IconWrapper>
        </ButtonAccent>
        <ButtonAdditional>ButtonAdditional</ButtonAdditional>
        <ButtonPrimary>ButtonPrimary</ButtonPrimary>
      </HorizontalStack>
      <HorizontalStack>
        <ButtonSecondary isFull>ButtonSecondary</ButtonSecondary>
        <ButtonTertiary isFull>ButtonTertiary</ButtonTertiary>
        <ButtonTransparent>ButtonTransparent</ButtonTransparent>
      </HorizontalStack>
      <HorizontalStack>
        <ButtonAccent isSmall>
          ButtonAccent
          <IconWrapper>
            <Icon size={IconSizeEnum.L} name={IconEnum.Trash} />
          </IconWrapper>
        </ButtonAccent>
        <ButtonAdditional isSmall>ButtonAdditional</ButtonAdditional>
        <ButtonPrimary isSmall>ButtonPrimary</ButtonPrimary>
        <ButtonSecondary isSmall>ButtonSecondary</ButtonSecondary>
        <ButtonTertiary isSmall>ButtonTertiary</ButtonTertiary>
        <ButtonTransparent isSmall>ButtonTransparent</ButtonTransparent>
      </HorizontalStack>
    </VerticalStack>
  </SectionWrapper>
);
