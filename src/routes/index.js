import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NoMatch from '../components/NoMatch';
import Home from '../containers/Home';
import { homePath } from './paths';

const Routes = ({ location }) => {
  return (
    <Switch location={location}>
      <Route exact path={homePath} component={Home} />
      <Route component={NoMatch} />
    </Switch>
  );
}

export default Routes;