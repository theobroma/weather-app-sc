import { Moon, Sun } from 'lucide-react';

import { ForecastDayType } from '@/api/forecast/types/z.forecast';

import {
  AstroIconWrapper,
  AstroText,
  ConditionImage,
  ConditionText,
  DateLabel,
  DayLabel,
  ForecastDayWrapper,
  SunriseWrapper,
  SunsetWrapper,
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
      <SunriseWrapper>
        <AstroIconWrapper>
          <Sun />
        </AstroIconWrapper>
        <AstroText> {astro.sunrise}</AstroText>
      </SunriseWrapper>
      <SunsetWrapper>
        <AstroIconWrapper>
          <Moon />
        </AstroIconWrapper>
        <AstroText> {astro.sunrise}</AstroText>
      </SunsetWrapper>
    </ForecastDayWrapper>
  );
};
