import { loadForecast } from '@api/forecast/forecast';
import { QueryEnum } from '@enums/query.enum';
import { useQuery } from '@tanstack/react-query';

export const CurrentWeather = () => {
  const { data } = useQuery({
    queryKey: [QueryEnum.LoadForecast],
    queryFn: () => loadForecast(),
  });

  console.log('🚀 ~ CurrentWeather ~ data:', data);

  return <div>{/* <CurrentWeatherLocation location={data.location} /> */}</div>;
};
