import { hideLoading, showLoading } from 'react-redux-loading-bar';

import { Auth } from '../../utils/constants/Actions';
import { feedPath } from '../../routes/paths';

export const signIn = ({ email, password }, history) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(showLoading());
    // make async call to database
    const firestore = getFirebase();

    return firestore
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch(hideLoading());
        history.push(feedPath);
        dispatch({ type: Auth.SIGN_IN_SUCCESS });
      })
      .catch((error) => {
        dispatch(hideLoading());
        dispatch({ type: Auth.SIGN_IN_ERROR, error: error.message });
      });
  }
}

export const signUp = (user) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch(showLoading());
    // make async call to database
    const firebase = getFirebase();
    const firestore = getFirestore();

    return firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((response) => {
        return firestore
          .collection('users')
          .doc(response.user.uid)
          .set({
            firstName: user.firstName,
            lastName: user.lastName,
            initials: user.firstName[0] + user.lastName[0]
          });
      })
      .then(() => {
        dispatch(hideLoading());
        dispatch({ type: Auth.SIGN_UP_SUCCESS, });
      })
      .catch((error) => {
        dispatch(hideLoading());
        dispatch({ type: Auth.SIGN_UP_ERROR, error: error.message, });
      });
  }
}

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(showLoading());

    const firebase = getFirebase();

    return firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(hideLoading());
        dispatch({ type: Auth.SIGN_OUT_SUCCESS, });
      })
  }
}