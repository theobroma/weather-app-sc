import { Style } from '@/components/style';

export const DayLabel = Style.Body2.Grey300.MarginTop(8).Span;
export const DateLabel = Style.Body1.Grey300.MarginTop(8).Span;
export const ConditionText = Style.Body1.Grey300.MarginTop(12).Span;
export const ConditionImage = Style.Height(64).Width(64).MarginTop(16).Image;
export const TemperatureText = Style.ButtonBig.Grey500.MarginTop(20).Span;
export const SunriseText = Style.Body2.Grey500.MarginTop(20).Span;
export const SunsetText = Style.Body2.Grey500.MarginTop(4).Span;

export const ForecastDayWrapper = Style.Flex.Column.CrossAxisCenter.Radius(4).Padding(36).DivStyled`
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
`;
