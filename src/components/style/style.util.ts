import { isNumber } from '@utils/is-data.util';

export const getUnitSize = (value: number) => `${value}px`;
export const getSize = (value: string | number) => (isNumber(value) ? getUnitSize(value) : value);
