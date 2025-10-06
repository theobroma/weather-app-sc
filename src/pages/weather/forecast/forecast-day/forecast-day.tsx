import { ForecastDayType } from '@/api/forecast/types/z.forecast';

import {
  ConditionImage,
  ConditionText,
  DateLabel,
  DayLabel,
  ForecastDayWrapper,
  SunriseText,
  SunsetText,
  TemperatureText,
} from './forecast-day.styles';

const weekdayOptions = { weekday: 'long' } as const;

const dateOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
} as const;

interface ForecastDayProps {
  forecastDay: ForecastDayType;
}

export const ForecastDay = ({ forecastDay }: ForecastDayProps) => {
  const { astro, date, day } = forecastDay;

  const adaptedDate = new Date(date);
  const weekDayString = adaptedDate.toLocaleString('en-US', weekdayOptions);
  const dateString = adaptedDate.toLocaleString('en-US', dateOptions);

  return (
    <ForecastDayWrapper>
      <DayLabel>{weekDayString}</DayLabel>
      <DateLabel>{dateString}</DateLabel>
      <ConditionImage src={day.condition.icon} alt="icon" />
      <ConditionText>{day.condition.text}</ConditionText>
      <TemperatureText>
        {day.mintempC}-{day.maxtempC}&#176;C
      </TemperatureText>
      <SunriseText>{astro.sunrise}</SunriseText>
      <SunsetText>{astro.sunset}</SunsetText>
    </ForecastDayWrapper>
  );
};
