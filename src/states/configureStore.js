import { routerMiddleware } from 'connected-react-router';
import { compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

import firebase from '../config/firebaseConfig';
import rootReducer from './reducers/';

const config = {
  userProfile: 'users',
  enableLogging: false,
};

const configureStore = (history) => {
  const middleware = applyMiddleware(
    thunk.withExtraArgument({ getFirebase, getFirestore, router: routerMiddleware(history), })
  );

  const store = createStore(
    rootReducer(history),
    compose(
      middleware,
      reduxFirestore(firebase),
      reactReduxFirebase(firebase, config),
    )
  );

  return store;
}

export default configureStore;