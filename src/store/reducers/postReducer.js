import Message from 'antd/es/message';

import { Feed } from '../../utils/constants/Actions';

const initState = {};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case Feed.ADD_FEED_SUCCESS:
    case Feed.UPDATE_FEED_SUCCESS:
    case Feed.DELETE_FEED_SUCCESS:
      Message.success('Well done!');
      return state;
    case Feed.ADD_FEED_ERROR:
    case Feed.UPDATE_FEED_ERROR:
    case Feed.DELETE_FEED_ERROR:
      Message.success('Try again!');
      return state;
    default:
      return state;
  }
}

export default postReducer;