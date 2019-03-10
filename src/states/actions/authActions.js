import { hideLoading, showLoading } from 'react-redux-loading-bar';

import { Auth } from '../../utils/constants/Actions';

export const signUp = (user) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch(showLoading());
    // make async call to database
    const firestore = getFirestore();

    return firestore
      .collection('users')
      .add({
        ...user,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch(hideLoading());
        dispatch({ type: Auth.SIGN_UP, user });
      })
      .catch((error) => {
        dispatch(hideLoading());
      });
  }
}
