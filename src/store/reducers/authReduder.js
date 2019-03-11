import Message from 'antd/es/message';

import { Auth } from '../../utils/constants/Actions';

const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case Auth.SIGN_IN_SUCCESS:
      return {...state, authError: null};
    case Auth.SIGN_IN_ERROR:
      Message.error(action.error);
      return {...state, authError: action.error};
    case Auth.SIGN_OUT_SUCCESS:
      return state;
    case Auth.SIGN_UP_SUCCESS:
      return {...state, authError: null};
    case Auth.SIGN_UP_ERROR:
      Message.error(action.error);
      return {...state, authError: action.error};
    default:
      return state;
  }
}
export default authReducer;