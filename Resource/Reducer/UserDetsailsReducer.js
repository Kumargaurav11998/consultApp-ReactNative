import {USER_DETAILS_ACTION_TYPE} from '../ActionType/UserDetailsActionType';

const initialState = {
  postStudentInfo: {},
  getStudentinfo: {},
};
export function PostStudentInfoReducer(state = initialState, action) {
  switch (action.type) {
    case USER_DETAILS_ACTION_TYPE.POST_STUDENT_INFO_REQUEST:
      return state;
    case USER_DETAILS_ACTION_TYPE.POST_STUDENT_INFO_SUCCESS:
      return {
        ...state,
        postStudentInfo: {
          ...state.data,
          ...action.data['data'],
        },
      };
    case USER_DETAILS_ACTION_TYPE.POST_STUDENT_INFO_FAILURE:
      return state;

    default:
      return state;
  }
}

// get student info
export function GetStudentInfoReducer(state = initialState, action) {
  switch (action.type) {
    case USER_DETAILS_ACTION_TYPE.GET_STUDENT_INFO_REQUEST:
      return state;
    case USER_DETAILS_ACTION_TYPE.GET_STUDENT_INFO_SUCCESS:
      console.log('*//////', action.data);
      return {
        ...state,
        getStudentinfo: {
          ...state.data,
          ...action.data,
        },
      };
    case USER_DETAILS_ACTION_TYPE.GET_STUDENT_INFO_FAILURE:
      return state;

    default:
      return state;
  }
}
