import { useQuery } from '@tanstack/react-query';
import { CurrentWeatherLocation } from './current-weather-location/current-weather-location';
import { loadForecast } from '../../api/forecast/forecast';

export const CurrentWeather = () => {
  const { data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => loadForecast(),
  });

  console.log('🚀 ~ CurrentWeather ~ data:', data);

  return <div>{/* <CurrentWeatherLocation location={data.location} /> */}</div>;
};
