import React, { Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'components/atoms/Loader/Loader';
import { logowanie } from 'router/AllRouteName';

function PrivateRoute({ render, isAuthenticated }) {
  return (
    <Suspense fallback={<Loader />}>
      <div>{!isAuthenticated ? <Navigate to={logowanie.path} /> : render}</div>
    </Suspense>
  );
}

PrivateRoute.propTypes = {
  render: PropTypes.element.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};
export default PrivateRoute;
