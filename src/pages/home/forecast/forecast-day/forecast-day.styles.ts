import { Style } from '@components/style';

export const Day = Style.Body1.Span;
export const ForecastDayWrapper = Style.Flex.Column.FlexGap(16).Radius(4).Padding(36).DivStyled`
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
`;
