import { loadForecast } from '@/api/forecast/forecast';
import { FormRow } from '@/components/form/common.styles';
import { QueryEnum } from '@/enums/query.enum';
import { useQuery } from '@tanstack/react-query';
import { isExist } from '@/utils/is-data.util';

import { ForecastDay } from './forecast-day/forecast-day';

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
