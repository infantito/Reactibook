import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import Layout from 'antd/es/layout';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import NavBar from './components/layout/NavBar';
import {
  theme,
  StyledPage,
  Inner,
  InnerOnly,
  InnerFooter,
  GlobalStyle
} from './components/common/Theme';
import logo from './assets/logo.svg';


class App extends Component {
  render() {
    const { history } = this.props;
    const { Header, Content, Footer } = Layout;

    return (
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <StyledPage>
            <Layout>
              <Header>
                <InnerOnly>
                  <NavBar logo={logo} />
                </InnerOnly>
              </Header>
              <Content>
                <Inner>
                  <Route render={({ location }) => <Routes location={location} />} />
                </Inner>
              </Content>
              <Footer>
                <InnerFooter>
                  &copy;Infantito Reactibook 2019
                </InnerFooter>
              </Footer>
            </Layout>
            <GlobalStyle />
          </StyledPage>
        </ThemeProvider>
      </ConnectedRouter>
    );
  }
}

export default App;
