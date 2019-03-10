import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import { homePath } from './routes/paths';
import 'antd/dist/antd.css';

const rootElement = document.getElementById('root');

const history = createBrowserHistory({ basename: homePath });
const store = configureStore(history);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App history={history} />
    </Provider>,
    rootElement
  );
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
})

