import {APPOINTMENT_ACTION_TYPE} from '../ActionType/Appointment_type';
import {USER_DETAILS_ACTION_TYPE} from '../ActionType/UserDetailsActionType';
import {AppointmentService} from '../Service/Appointment_Service';
import {UserDetailsService} from '../Service/UserDetailsService';

export const AppointmentAction = {
  BookAppointmentAction,
  GetUpComingAppointmentAction,
};

function BookAppointmentAction(data) {
  return dispatch => {
    dispatch(request());
    return AppointmentService.BookAppointmentService(data).then(
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
      type: APPOINTMENT_ACTION_TYPE.BOOK_APPOINTMENT_REQUEST,
    };
  }
  function success(data) {
    return {type: APPOINTMENT_ACTION_TYPE.BOOK_APPOINTMENT_SUCCESS, data};
  }
  function failure(error) {
    return {type: APPOINTMENT_ACTION_TYPE.BOOK_APPOINTMENT_FAILURE, error};
  }
}
// get upcoming appointment

function GetUpComingAppointmentAction(data) {
  return dispatch => {
    dispatch(request());
    return AppointmentService.GetUpcomingAppointmentService(data).then(
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
      type: APPOINTMENT_ACTION_TYPE.GET_UPCOMING_APPOINTMENT_REQUEST,
    };
  }
  function success(data) {
    return {type: APPOINTMENT_ACTION_TYPE.BOOK_APPOINTMENT_SUCCESS, data};
  }
  function failure(error) {
    return {type: APPOINTMENT_ACTION_TYPE.BOOK_APPOINTMENT_FAILURE, error};
  }
}
