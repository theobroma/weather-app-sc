import { Forecast } from '../../components/forecast/forecast';
import { CurrentWeather } from '../../components/current-weather/current-weather';

const HomePage = () => {
  return (
    <>
      <CurrentWeather />
      <Forecast />
    </>
  );
};

export default HomePage;
