import { FormRow } from '../form/common.styles';
import { ForecastDay } from './forecast-day/forecast-day';

export const Forecast = () => (
  <FormRow sizes={3}>
    <ForecastDay />
    <ForecastDay />
    <ForecastDay />
  </FormRow>
);
