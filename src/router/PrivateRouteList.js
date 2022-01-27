import { lazy } from 'react';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));

const PrivateRouteList = [
  {
    path: '/',
    Component: HomePage,
    exact: false,
  },
  {
    path: '/home',
    Component: HomePage,
    exact: true,
  },
];

export default PrivateRouteList;
