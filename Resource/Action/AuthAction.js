import {AUTH_ACTION_TYPE} from '../ActionType/AuthActionType';
import {AuthService} from '../Service/Authservice';

export const AuthActtion = {
  LoginAction,
  CheckAccountAction,
  GetOTPAction,
  verifyOTPAction,
};

function LoginAction(mobile, date_time) {
  console.log(mobile, date_time);
  return dispatch => {
    dispatch(request());
    return AuthService.LoginWithMobile(mobile, date_time).then(
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
      type: AUTH_ACTION_TYPE.LOGIN_REQUEST,
    };
  }
  function success(data) {
    return {type: AUTH_ACTION_TYPE.LOGIN_SUCCESS, data};
  }
  function failure(error) {
    return {type: AUTH_ACTION_TYPE.LOGIN_FAILURE, error};
  }
}

function CheckAccountAction(mobile) {
  return dispatch => {
    dispatch(request());
    return AuthService.CheckAccountService(mobile).then(
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
      type: AUTH_ACTION_TYPE.CHECK_ACCOUNT_REQUEST,
    };
  }
  function success(data) {
    return {type: AUTH_ACTION_TYPE.CHECK_ACCOUN_SUCCESS, data};
  }
  function failure(error) {
    return {type: AUTH_ACTION_TYPE.CHECK_ACCOUN_FAILURE, error};
  }
}

// GET OTP

function GetOTPAction(mobile) {
  return dispatch => {
    dispatch(request());
    return AuthService.GetOTPService(mobile).then(
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
      type: AUTH_ACTION_TYPE.GET_OTP_REQUEST,
    };
  }
  function success(data) {
    return {type: AUTH_ACTION_TYPE.GET_OTP_SUCCESS, data};
  }
  function failure(error) {
    return {type: AUTH_ACTION_TYPE.GET_OTP_FAILURE, error};
  }
}

// VERIFY OTP

function verifyOTPAction(mobile) {
  return dispatch => {
    dispatch(request());
    return AuthService.VerifyOTPService(mobile).then(
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
      type: AUTH_ACTION_TYPE.VERIFY_OTP_REQUEST,
    };
  }
  function success(data) {
    return {type: AUTH_ACTION_TYPE.GET_OTP_SUCCESS, data};
  }
  function failure(error) {
    return {type: AUTH_ACTION_TYPE.GET_OTP_FAILURE, error};
  }
}
