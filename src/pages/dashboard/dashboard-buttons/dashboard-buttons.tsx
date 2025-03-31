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
import { FormRow } from '@components/form/common.styles';

export const DashboardButtons = () => (
  <FormRow sizes={8}>
    <ButtonAccent>ButtonAccent</ButtonAccent>
    <ButtonAdditional>ButtonAdditional</ButtonAdditional>
    <ButtonPrimary>ButtonPrimary</ButtonPrimary>
    <ButtonSecondary>
      ButtonSecondary
      <IconWrapper>
        <Icon size={IconSizeEnum.L} name={IconEnum.Trash} />
      </IconWrapper>
    </ButtonSecondary>
    <ButtonTertiary>ButtonTertiary</ButtonTertiary>
    <ButtonTransparent>ButtonTransparent</ButtonTransparent>
  </FormRow>
);
