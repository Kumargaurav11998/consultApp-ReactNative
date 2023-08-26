import { COMMON_ACTION_TYPE } from "../ActionType/CommonActionType";

const initialState = {
    postStudentInfo:{},
    Getuserid:{},
    

};
export function GetUerId(state = initialState, action) {
    switch (action.type) {
      case COMMON_ACTION_TYPE.GET_USER_ID_REQUEST:
        return state;
      case COMMON_ACTION_TYPE.GET_USER_ID_SUCCESS:
        return {
          ...state,
          Getuserid: {
            ...state.data,
            ...action.data
          }
        };
      case COMMON_ACTION_TYPE.GET_USER_ID_FAILURE:
        return state;
  
  
      default:
        return state;
    }
  }

