import { Style } from '../style';

interface FormRowProps {
  sizes?: number | number[];
}

const SEPARATOR = ' ';
const FORM_ROW_MARGIN_TOP = 24;

const getGridTemplateColumns = ({ sizes }: FormRowProps) =>
  Array.isArray(sizes) ? sizes.map((size) => `${size}fr`).join(SEPARATOR) : Array(sizes).fill('1fr').join(SEPARATOR);

export const FormRow = Style.Grid.GridColumnGap(16).MarginTop(FORM_ROW_MARGIN_TOP).DivStyled<FormRowProps>`
    grid-template-columns: ${getGridTemplateColumns};
`;
