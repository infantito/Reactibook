import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';
import { firebaseReducer as firebase } from 'react-redux-firebase';
import { firestoreReducer as firestore } from 'redux-firestore';

import auth from './authReduder';
import post from './postReducer';

const reducers = (history) =>
  combineReducers({
    auth,
    post,
    firebase,
    firestore,
    loadingBar,
    router: connectRouter(history)
  });

export default reducers;