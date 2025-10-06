interface CurrentWeatherConditionsItemProps {
  title: string;
  iconNode?: any;
  children?: React.ReactNode;
}

export const CurrentWeatherConditionsItem = ({ title, iconNode, children }: CurrentWeatherConditionsItemProps) => (
  <div>
    {title}
    {iconNode && iconNode}
    {children}
  </div>
);
