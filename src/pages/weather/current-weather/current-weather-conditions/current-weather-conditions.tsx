import { CalendarDays, CloudHail, Thermometer, Tornado, Wind } from 'lucide-react';

import { CurrentWeatherType } from '@/api/forecast/types/z.current';

import { CurrentWeatherConditionsItem } from './current-weather-conditions-item/current-weather-conditions-item';

interface CurrentWeatherConditionsProps {
  current: CurrentWeatherType;
}

export const CurrentWeatherConditions = ({ current }: CurrentWeatherConditionsProps) => {
  const { lastUpdated, windKph, humidity, gustKph, feelslikeC, windDir } = current;

  return (
    <div>
      <CurrentWeatherConditionsItem title="Today" iconNode={<CalendarDays />}>
        {lastUpdated}
      </CurrentWeatherConditionsItem>
      <CurrentWeatherConditionsItem title="Feels Like" iconNode={<Thermometer />}>
        {feelslikeC}°C
      </CurrentWeatherConditionsItem>
      <CurrentWeatherConditionsItem title="Humidity" iconNode={<CloudHail />}>
        {humidity}%
      </CurrentWeatherConditionsItem>
      <CurrentWeatherConditionsItem title="Wind" iconNode={<Wind />}>
        {windKph}km/h ({windDir})
      </CurrentWeatherConditionsItem>
      <CurrentWeatherConditionsItem title="Gust" iconNode={<Tornado />}>
        {gustKph}km/h
      </CurrentWeatherConditionsItem>
    </div>
  );
};
