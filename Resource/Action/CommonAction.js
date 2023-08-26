import {AUTH_ACTION_TYPE} from '../ActionType/AuthActionType';
import {COMMON_ACTION_TYPE} from '../ActionType/CommonActionType';
import {AuthService} from '../Service/Authservice';
import {CommonService} from '../Service/CommonService';

export const CommonAction = {
  GetUserId,
  GetTimeSlotAction,
  GetCommonTermAndConditiontAction,
};

function GetUserId(id) {
  return dispatch => {
    dispatch(request());
    dispatch(success(id));
  };
  function request() {
    return {
      type: COMMON_ACTION_TYPE.GET_USER_ID_REQUEST,
    };
  }
  function success(data) {
    return {type: COMMON_ACTION_TYPE.GET_USER_ID_SUCCESS, data};
  }
  function failure(error) {
    return {type: COMMON_ACTION_TYPE.GET_USER_ID_FAILURE, error};
  }
}

function GetTimeSlotAction(day) {
  return dispatch => {
    dispatch(request());
    return CommonService.GetTimeSlotService(day).then(
      response => {
        dispatch(success(response));
        return Promise.resolve(response);
      },
      error => {
        dispatch(failure(error));
        return Promise.reject();
      },
    );
  };
  function request() {
    return {
      type: COMMON_ACTION_TYPE.GET_TIME_SLOT_REQUEST,
    };
  }
  function success(data) {
    return {type: COMMON_ACTION_TYPE.GET_TIME_SLOT_SUCCESS, data};
  }
  function failure(error) {
    return {type: COMMON_ACTION_TYPE.GET_TIME_SLOT_FAILURE, error};
  }
}

// GET cOMMON TERM AND CONDITION

function GetCommonTermAndConditiontAction(day) {
  return dispatch => {
    dispatch(request());
    return CommonService.ComonTermAndConditionService(day).then(
      response => {
        dispatch(success(response));
        return Promise.resolve(response);
      },
      error => {
        dispatch(failure(error));
        return Promise.reject();
      },
    );
  };
  function request() {
    return {
      type: COMMON_ACTION_TYPE.GET_COMMON_TERMAND_CONDITION_REQUEST,
    };
  }
  function success(data) {
    return {
      type: COMMON_ACTION_TYPE.GET_COMMON_TERMAND_CONDITION_SUCCESS,
      data,
    };
  }
  function failure(error) {
    return {
      type: COMMON_ACTION_TYPE.GET_COMMON_TERMAND_CONDITION_FAILURE,
      error,
    };
  }
}
