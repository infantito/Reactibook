import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';

import Routes from './routes';
// import logo from './assets/logo.svg';

class App extends Component {
  render() {
    const { history } = this.props;

    return (
      <ConnectedRouter history={history}>
        <Route render={({ location }) => <Routes location={location} />} />
      </ConnectedRouter>
    );
  }
}

export default App;
