import { Auth } from '../../utils/constants/Actions';

const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case Auth.SIGN_IN_SUCCESS:
      return {...state, authError: null};
    case Auth.SIGN_IN_ERROR:
      return {...state, authError: 'SignIn Failed'};
    case Auth.SIGN_OUT_SUCCESS:
      return state;
    case Auth.SIGN_UP_SUCCESS:
      return {...state, authError: null};
    case Auth.SIGN_UP_ERROR:
      return {...state, authError: 'SignUp Failed'};
    default:
      return state;
  }
}
export default authReducer;