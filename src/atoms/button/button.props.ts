import { ButtonHTMLAttributes, ReactNode } from 'react';
import { IStyledComponent } from 'styled-components';

import { ClickEventType } from '@/types/click-event.type';

import { ButtonTypeEnum } from './button-type.enum';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: ClickEventType;
  onMouseDown?: ClickEventType;
  title?: string;
  type?: ButtonTypeEnum;
  children?: ReactNode;
  Component?: IStyledComponent<'web', any>;
  isSmall?: boolean;
  isFull?: boolean;
  isDisabled?: boolean;
  isDisabledPointer?: boolean;
  as?: IStyledComponent<'web', any>;
}
