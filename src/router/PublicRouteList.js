import { lazy } from 'react';
import { logowanie, noweHaslo, przypomnijHaslo } from 'router/AllRouteName';

const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const NewPasswordPage = lazy(() => import('pages/NewPasswordPage/NewPasswordPage'));
const RemindPasswordPage = lazy(() => import('pages/RemindPasswordPage/RemindPasswordPage'));

const PublicRouteList = [
  {
    path: logowanie.path,
    Component: LoginPage,
    exact: true,
  },
  {
    path: noweHaslo.path,
    Component: NewPasswordPage,
    exact: true,
  },
  {
    path: przypomnijHaslo.path,
    Component: RemindPasswordPage,
    exact: true,
  },
];

export default PublicRouteList;
