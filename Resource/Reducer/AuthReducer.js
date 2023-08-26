import {AUTH_ACTION_TYPE} from '../ActionType/AuthActionType';

const initialState = {
  authuser: {},
};
export function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_ACTION_TYPE.LOGIN_REQUEST:
      return state;
    case AUTH_ACTION_TYPE.LOGIN_SUCCESS:
      return {
        ...state,
        authuser: {
          ...state.data,
          ...action.data,
        },
      };
    case AUTH_ACTION_TYPE.LOGIN_FAILURE:
      return state;

    default:
      return state;
  }
}
