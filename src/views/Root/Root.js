import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyles';
import { theme } from 'theme/mainTheme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicRoute from 'router/PublicRoute';
import PrivateRoute from 'router/PrivateRoute';
import PublicRouteList from 'router/PublicRouteList';
import PrivateRouteList from 'router/PrivateRouteList';

function Root() {
  const isAuthenticated = false;
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            {PublicRouteList.map(({ path, Component, exact }) => (
              <Route
                key={path}
                path={path}
                element={<PublicRoute isAuthenticated={isAuthenticated} render={<Component />} />}
                exact={exact}
              />
            ))}
            {PrivateRouteList.map(({ path, Component, exact }) => (
              <Route
                key={path}
                path={path}
                element={<PrivateRoute isAuthenticated={isAuthenticated} render={<Component />} />}
                exact={exact}
              />
            ))}
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default Root;
