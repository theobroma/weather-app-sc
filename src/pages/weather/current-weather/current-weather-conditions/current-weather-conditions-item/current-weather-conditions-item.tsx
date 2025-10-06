import { Text, Title } from './current-weather-conditions-item.styles';

interface CurrentWeatherConditionsItemProps {
  title: string;
  iconNode?: any;
  children?: React.ReactNode;
}

export const CurrentWeatherConditionsItem = ({ title, iconNode, children }: CurrentWeatherConditionsItemProps) => (
  <div>
    <Title>
      {title} {iconNode && iconNode}
    </Title>
    <Text>{children}</Text>
  </div>
);
