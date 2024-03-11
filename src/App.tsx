import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Forecast } from './components/forecast/forecast';
// import { GridExample } from './components/grid-example/grid-example';
import { CurrentWeather } from './components/current-weather/current-weather';
import { router } from './pages';
import { RouterProvider } from 'react-router-dom';
// import { StarterIntro } from './components/starter-intro/starter-intro';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 1,
    },
  },
});

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     {/* <StarterIntro /> */}
//     <CurrentWeather />
//     <Forecast />
//     {/* <GridExample /> */}
//   </QueryClientProvider>
// );

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <RouterProvider router={router} />
  </QueryClientProvider>
);

export default App;
