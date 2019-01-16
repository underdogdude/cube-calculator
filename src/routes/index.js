import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Person from '../pages/create/Person';

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/create" component={Person} />
  </Switch>
);
