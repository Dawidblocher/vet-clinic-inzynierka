import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import Loader from 'components/atoms/Loader/Loader';
import { logowanie } from 'router/AllRouteName';

function PublicRoute({ render, isAuthenticated }) {
  return (
    <Suspense fallback={<Loader />}>
      <div>{isAuthenticated ? <Navigate to={logowanie.path} /> : render}</div>
    </Suspense>
  );
}

PublicRoute.propTypes = {
  render: PropTypes.element.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default PublicRoute;
