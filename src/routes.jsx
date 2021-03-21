import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import HomePage from './pages/home';
import Error404Page from './pages/error_404';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />

    <Route exact path="/error404" component={Error404Page} />
    <Redirect to="/error404" />
  </Switch>
)


export default Routes