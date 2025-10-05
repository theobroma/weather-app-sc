import { LocationType } from '@api/forecast/types/z.location';
import { Location, LocationWrapper } from './current-weather-location.styles';

interface CurrentWeatherLocationProps {
  location: LocationType;
}

export const CurrentWeatherLocation = ({ location }: CurrentWeatherLocationProps) => {
  const { name, country, region } = location;

  return (
    <LocationWrapper>
      <Location>
        {name}, {region}, {country}
      </Location>
    </LocationWrapper>
  );
};
