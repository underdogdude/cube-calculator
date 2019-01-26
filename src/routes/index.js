import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Person from '../pages/create/Person';
import Summary from '../pages/create/Summary';
import Login from '../pages/Login';
import auth from '../firebase';

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/create" component={Person} />
    <Route path="/summary" component={Summary} />
    <Route path="/login" component={Login} />
  </Switch>
);
