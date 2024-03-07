import { connectionClient } from '../connection';

const lat = 0;
const lon = 0;
const days = 3;

export const loadForecast = async () => {
  const { data } = await connectionClient.get<any>(`/forecast.json?q=${lat},${lon}&days=${days}`);

  return data;
};
