import { CurrentWeatherType } from '@/api/forecast/types/z.current';

import { ConditionImage, ConditionText, TemperatureText } from './current-weather-temperature.styles';

interface CurrentWeatherTemperatureProps {
  current: CurrentWeatherType;
}

export const CurrentWeatherTemperature = ({ current }: CurrentWeatherTemperatureProps) => {
  const { tempC, condition } = current;

  return (
    <div>
      <div>
        <ConditionImage src={condition.icon} width="150" alt="condition" />
        <TemperatureText>{tempC}&#176;C</TemperatureText>
      </div>
      <ConditionText>{condition.text}</ConditionText>
    </div>
  );
};
