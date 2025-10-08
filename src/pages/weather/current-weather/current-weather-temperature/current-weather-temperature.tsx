import { CurrentWeatherType } from '@/api/forecast/types/z.current';
import { EmptyWrapper } from '@/components/form/common.styles';

import { ConditionImage, ConditionText, TemperatureText } from './current-weather-temperature.styles';

interface CurrentWeatherTemperatureProps {
  current: CurrentWeatherType;
}

export const CurrentWeatherTemperature = ({ current }: CurrentWeatherTemperatureProps) => {
  const { tempC, condition } = current;

  return (
    <EmptyWrapper>
      <EmptyWrapper>
        <ConditionImage src={condition.icon} width="150" alt="condition" />
        <TemperatureText>{tempC}&#176;C</TemperatureText>
      </EmptyWrapper>
      <ConditionText>{condition.text}</ConditionText>
    </EmptyWrapper>
  );
};
