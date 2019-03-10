import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NoMatch from '../components/common/NoMatch';
import Feed from '../containers/Feed';
import Home from '../containers/Home';
import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';
import {
  feedPath,
  homePath,
  signInPath,
  signOutPath,
  signUpPath,
} from './paths';

const Routes = ({ location }) => {
  return (
    <Switch location={location}>
      <Route exact path={homePath} component={Home} />
      <Route path={feedPath} component={Feed} />
      <Route path={signInPath} component={SignIn} />
      <Route path={signOutPath} component={Home} />
      <Route path={signUpPath} component={SignUp} />
      <Route component={NoMatch} />
    </Switch>
  );
}

export default Routes;