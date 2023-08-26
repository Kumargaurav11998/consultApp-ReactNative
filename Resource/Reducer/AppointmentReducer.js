import {APPOINTMENT_ACTION_TYPE} from '../ActionType/Appointment_type';

const initialState = {
  bookedappointment: {},
};
export function AppointmentBookReducer(state = initialState, action) {
  switch (action.type) {
    case APPOINTMENT_ACTION_TYPE.BOOK_APPOINTMENT_REQUEST:
      return state;
    case APPOINTMENT_ACTION_TYPE.BOOK_APPOINTMENT_SUCCESS:
      return {
        ...state,
        bookedappointment: {
          ...state.data,
          ...action.data,
        },
      };
    case APPOINTMENT_ACTION_TYPE.BOOK_APPOINTMENT_FAILURE:
      return state;

    default:
      return state;
  }
}
