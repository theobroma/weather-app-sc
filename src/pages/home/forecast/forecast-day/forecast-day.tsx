import { ForecastDayType } from '@api/forecast/types/z.forecast';

import { Day, ForecastDayWrapper } from './forecast-day.styles';

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
      <Day>{weekDayString}</Day>
      <span>{dateString}</span>
      <span>{astro.sunrise}</span>
      <span>{astro.sunset}</span>
      <img src={day.condition.icon} alt="icon" />
    </ForecastDayWrapper>
  );
};
