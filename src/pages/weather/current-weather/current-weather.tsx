import { useQuery } from '@tanstack/react-query';

import { loadForecast } from '@/api/forecast/forecast';
import { FormRow } from '@/components/form/common.styles';
import { QueryEnum } from '@/enums/query.enum';
import { isExist } from '@/utils/is-data.util';

import { CurrentWeatherConditions } from './current-weather-conditions/current-weather-conditions';
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
          <FormRow sizes={2}>
            <CurrentWeatherTemperature current={data.current} />
            <CurrentWeatherConditions />
          </FormRow>
        </>
      )}
    </>
  );
};
