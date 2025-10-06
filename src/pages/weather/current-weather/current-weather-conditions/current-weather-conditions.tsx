import { CalendarDays, CloudHail, Thermometer, Tornado, Wind } from 'lucide-react';

import { CurrentWeatherConditionsItem } from './current-weather-conditions-item/current-weather-conditions-item';

export const CurrentWeatherConditions = () => (
  <div>
    <CurrentWeatherConditionsItem title="Today" iconNode={<CalendarDays />}>
      1
    </CurrentWeatherConditionsItem>
    <CurrentWeatherConditionsItem title="Feels Like" iconNode={<Thermometer />}>
      2
    </CurrentWeatherConditionsItem>
    <CurrentWeatherConditionsItem title="Humidity" iconNode={<CloudHail />}>
      3
    </CurrentWeatherConditionsItem>
    <CurrentWeatherConditionsItem title="Wind" iconNode={<Wind />}>
      4
    </CurrentWeatherConditionsItem>
    <CurrentWeatherConditionsItem title="Gust" iconNode={<Tornado />}>
      5
    </CurrentWeatherConditionsItem>
  </div>
);
