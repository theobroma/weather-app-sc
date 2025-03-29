import { CurrentWeatherType } from '@api/forecast/types/z.current';

interface CurrentWeatherTemperatureProps {
  current: CurrentWeatherType;
}

export const CurrentWeatherTemperature = ({ current }: CurrentWeatherTemperatureProps) => {
  const { tempC, condition } = current;

  return (
    <div>
      <div>
        <span>{tempC}&#176;C</span>
      </div>
      <div>
        <img src={condition.icon} width="150" alt="condition" />
        <span> {condition.text}</span>
      </div>
    </div>
  );
};
