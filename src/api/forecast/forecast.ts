import { connectionClient } from '@api/connection';

import { forecastResponseSchema } from './forecast.interface';

const lat = 0;
const lon = 0;
const days = 3;

export const loadForecast = async () => {
  const { data } = await connectionClient.get(`/forecast.json?q=${lat},${lon}&days=${days}`);

  return forecastResponseSchema.parse(data);
};
