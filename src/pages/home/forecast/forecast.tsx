import { useQuery } from '@tanstack/react-query';

import { loadForecast } from '@api/forecast/forecast';
import { FormRow } from '@components/form/common.styles';
import { QueryEnum } from '@enums/query.enum';

import { ForecastDay } from './forecast-day/forecast-day';
import { isExist } from '@utils/is-data.util';

export const Forecast = () => {
  const { data, error, isError } = useQuery({
    queryKey: [QueryEnum.LoadForecast],
    queryFn: () => loadForecast(),
  });

  if (isError) {
    console.log('🚀 ~ Forecast ~ error:', error);
  }

  return (
    <>
      {isExist(data) && (
        <FormRow sizes={3}>
          {data?.forecast.forecastday.map((forecastDay, index) => (
            <ForecastDay key={index} forecastDay={forecastDay} />
          ))}
        </FormRow>
      )}
    </>
  );
};
