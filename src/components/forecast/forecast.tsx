import { useQuery } from '@tanstack/react-query';

import { loadForecast } from '../../api/forecast/forecast';
import { FormRow } from '../form/common.styles';
import { ForecastDay } from './forecast-day/forecast-day';

export const Forecast = () => {
  const { data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => loadForecast(),
  });

  console.log('🚀 ~ Forecast ~ data:', data);

  return (
    <FormRow sizes={3}>
      <ForecastDay />
      <ForecastDay />
      <ForecastDay />
    </FormRow>
  );
};
