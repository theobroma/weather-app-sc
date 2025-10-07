import {
  CurrentWeatherConditionsItemWrapper,
  IconWrapper,
  LabelWrapper,
  Text,
  Title,
} from './current-weather-conditions-item.styles';

interface CurrentWeatherConditionsItemProps {
  title: string;
  iconNode?: any;
  children?: React.ReactNode;
}

export const CurrentWeatherConditionsItem = ({ title, iconNode, children }: CurrentWeatherConditionsItemProps) => (
  <CurrentWeatherConditionsItemWrapper>
    <LabelWrapper>
      <IconWrapper>{iconNode && iconNode}</IconWrapper>
      <Title>{title}:</Title>
    </LabelWrapper>
    <Text>{children}</Text>
  </CurrentWeatherConditionsItemWrapper>
);
