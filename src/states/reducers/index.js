import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { firebaseReducer as firebase } from 'react-redux-firebase';

const reducers = (history) =>
  combineReducers({ firebase, router: connectRouter(history) });

export default reducers;