import { OnEventType } from '@/types/on-event.type';

export interface CheckBoxProps {
  isChecked: boolean;
  onChange: OnEventType<boolean>;
  title?: string;
  disabled?: boolean;
  isGreyTitle?: boolean;
}
