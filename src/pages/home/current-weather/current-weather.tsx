import { useQuery } from '@tanstack/react-query';

import { loadForecast } from '@/api/forecast/forecast';
import { QueryEnum } from '@/enums/query.enum';
import { isExist } from '@/utils/is-data.util';

import { CurrentWeatherLocation } from './current-weather-location/current-weather-location';
import { CurrentWeatherTemperature } from './current-weather-temperature/current-weather-temperature';

export const CurrentWeather = () => {
  const { data, isPending } = useQuery({
    queryKey: [QueryEnum.LoadForecast],
    queryFn: () => loadForecast(),
  });

  if (isPending) {
    return <>Loading...</>;
  }

  return (
    <>
      {isExist(data) && (
        <>
          <CurrentWeatherLocation location={data.location} />
          <br />
          <CurrentWeatherTemperature current={data.current} />
        </>
      )}
    </>
  );
};
