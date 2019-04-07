import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PublicModule from '../app/public/index';

const { LoginPage, HomePage } = PublicModule;

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  </Router>
);

export default Routes;
