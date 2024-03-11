import { LocationType } from '../../../api/forecast/forecast.interface';

interface CurrentWeatherLocationProps {
  location: LocationType;
}

export const CurrentWeatherLocation = ({ location }: CurrentWeatherLocationProps) => {
  const { name, country, region } = location;

  return (
    <div>
      {name}, {region}, {country}
    </div>
  );
};
