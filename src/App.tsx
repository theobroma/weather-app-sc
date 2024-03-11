import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

import { Forecast } from './components/forecast/forecast';
// import { GridExample } from './components/grid-example/grid-example';
import { CurrentWeather } from './components/current-weather/current-weather';
// import { StarterIntro } from './components/starter-intro/starter-intro';

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* <StarterIntro /> */}
    <CurrentWeather />
    <Forecast />
    {/* <GridExample /> */}
  </QueryClientProvider>
);

export default App;
