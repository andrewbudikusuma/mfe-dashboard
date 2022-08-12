import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import Signin from './components/Signin';
import Forgot from './components/Forgot';

export default ({ history }) => {
  return <div className="h-full">
    <Router history={history}>
      <Switch>
        <Route exact path="/forgot" component={Forgot} />
        <Route path="/" component={Signin} />
      </Switch>
    </Router>
  </div>
}