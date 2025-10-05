import { lazy } from 'react';
import pMinDelay from 'p-min-delay';
import { createBrowserRouter } from 'react-router-dom';

import { Layout } from './layout';

const MIN_LAZY_DELAY = 300;

const HomePage = lazy(() => pMinDelay(import('./home/home.page'), MIN_LAZY_DELAY));
const StarterIntroPage = lazy(() => pMinDelay(import('./starter-intro/starter-intro.page'), MIN_LAZY_DELAY));
const GridExamplePage = lazy(() => pMinDelay(import('./grid-example/grid-example.page'), MIN_LAZY_DELAY));
const DashboardPage = lazy(() => pMinDelay(import('./dashboard/dashboard.page'), MIN_LAZY_DELAY));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/starter',
        element: <StarterIntroPage />,
      },
      {
        path: '/grid',
        element: <GridExamplePage />,
      },
      {
        path: '/grid',
        element: <GridExamplePage />,
      },
      {
        path: '/dashboard',
        element: <DashboardPage />,
      },
    ],
  },
]);
