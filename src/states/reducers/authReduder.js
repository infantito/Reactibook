import { Auth } from '../../utils/constants/Actions';

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case Auth.SIGN_UP:
      return state;
    default:
      return state;
  }
}
export default authReducer;