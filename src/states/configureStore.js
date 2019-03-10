import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, createStore } from 'redux';

import rootReducer from './reducers';

const configureStore = (history) => {
  const middleware = applyMiddleware(routerMiddleware(history));
  const store = createStore(rootReducer(history), middleware);

  return store;
}

export default configureStore;