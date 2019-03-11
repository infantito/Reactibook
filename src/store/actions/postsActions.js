import { hideLoading, showLoading } from 'react-redux-loading-bar';

import { Feed } from '../../utils/constants/Actions';

export const createPost = (post) => {
  return (dispatch, getState, { getFirestore }) => {
    dispatch(showLoading());
    // make async call to database
    const firestore = getFirestore();
    const { firebase: { auth, profile = {}, } } = getState();

    return firestore
      .collection('posts')
      .add({
        ...post,
        owner: `${profile.firstName} ${profile.lastName}`,
        userId: auth.uid,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch(hideLoading());
        dispatch({ type: Feed.ADD_FEED_SUCCESS });
      })
      .catch((error) => {
        dispatch(hideLoading());
        dispatch({ type: Feed.ADD_FEED_ERROR }, error);
      })
  }
}


export const updatePost = ({ id, content }) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    dispatch(showLoading());
    // make async call to database
    const firestore = getFirestore();

    return firestore
      .collection('posts')
      .doc(id)
      .update({ content })
      .then(() => {
        dispatch(hideLoading());
        dispatch({ type: Feed.UPDATE_FEED_SUCCESS });
      })
      .catch((error) => {
        dispatch(hideLoading());
        dispatch({ type: Feed.UPDATE_FEED_ERROR }, error);
      })
  }
}


export const removePost = ({ id }) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    dispatch(showLoading());
    // make async call to database
    const firestore = getFirestore();

    return firestore
      .collection('posts')
      .doc(id)
      .delete()
      .then(() => {
        dispatch(hideLoading());
        dispatch({ type: Feed.DELETE_FEED_SUCCESS });
      })
      .catch((error) => {
        dispatch(hideLoading());
        dispatch({ type: Feed.DELETE_FEED_ERROR }, error);
      })
  }
}