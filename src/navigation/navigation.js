import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from '../pages/home/home';
import Usecase from '../pages/usecase/usecase';
import PrivateRoute from './privateRoute';


const Navigation = () => (
  <Router>
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute exact path="/usecase" component={Usecase} />

    </Switch>
  </Router>
);

export default Navigation;
