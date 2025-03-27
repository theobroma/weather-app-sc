import { ChangeEvent, PropsWithChildren } from 'react';

import { Icon } from '@atom/icon/icon';
import { IconSizeEnum } from '@atom/icon/icon.enum';
import { ColorEnum } from '@enum/color.enum';
import { IconEnum } from '@enum/icon.enum';
import { isExist, isString } from '@util/is-data.util';

import { CheckBoxProps } from './checkbox.interface';
import {
    CheckBoxLabel,
    CheckBoxWrapper,
    CheckBoxIconWrapper,
    CheckBoxTitle,
    ChildrenWrapper,
    Input,
} from './checkbox.styles';

export const Checkbox = ({
    isChecked,
    onChange,
    title,
    disabled = false,
    children,
    isGreyTitle = false,
    ...props
}: PropsWithChildren<CheckBoxProps>) => {
    const shouldRenderTitle = isString(title);
    const shouldRenderChildren = isExist(children);

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => onChange(target.checked);

    return (
        <CheckBoxWrapper>
            <CheckBoxLabel isDisabled={disabled}>
                <Input type="checkbox" disabled={disabled} checked={isChecked} onChange={handleChange} hidden />
                <CheckBoxIconWrapper isChecked={isChecked} isDisabled={disabled} {...props}>
                    {isChecked && (
                        <Icon
                            name={IconEnum.Check}
                            color={disabled ? ColorEnum.Grey200 : ColorEnum.Primary500}
                            size={IconSizeEnum.S}
                        />
                    )}
                </CheckBoxIconWrapper>
                {shouldRenderTitle && <CheckBoxTitle isGreyTitle={isGreyTitle}>{title}</CheckBoxTitle>}
                {shouldRenderChildren && <ChildrenWrapper>{children}</ChildrenWrapper>}
            </CheckBoxLabel>
        </CheckBoxWrapper>
    );
};
