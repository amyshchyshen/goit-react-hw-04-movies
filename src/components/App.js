import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from '../routes/routes';
import Navigation from './Navigation/Navigation';
import Loader from './Loader/Loader';

const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route
            exact
            path={routes.HOME_PAGE.path}
            component={routes.HOME_PAGE.component}
          />
          <Route
            path={routes.MOVIE_DETAILS_PAGE.path}
            component={routes.MOVIE_DETAILS_PAGE.component}
          />
          <Route
            path={routes.MOVIES_PAGE.path}
            component={routes.MOVIES_PAGE.component}
          />
          <Redirect to={routes.HOME_PAGE.path} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
