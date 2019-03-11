import { hideLoading, showLoading } from 'react-redux-loading-bar';

import { Feed } from '../../utils/constants/Actions';

export const createPost = (post) => {
  return (dispatch, getState, { getFirestore }) => {
    dispatch(showLoading());
    // make async call to database
    const firestore = getFirestore();
    const { firebase: { profile, auth } } = getState();
    const { firstName, lastName } = profile;

    return firestore
      .collection('posts')
      .add({
        ...post,
        owner: `${firstName} ${lastName}`,
        userId: auth.uid,
        createdAdd: new Date(),
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