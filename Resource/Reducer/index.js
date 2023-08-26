import {combineReducers} from 'redux';
import {PostStudentInfoReducer} from './UserDetsailsReducer';
import {GetUerId} from './CommonReducer';
import {AuthReducer} from './AuthReducer';
import {AppointmentBookReducer} from './AppointmentReducer';
import {GetStudentInfoReducer} from './UserDetsailsReducer';
const rootReducer = combineReducers({
  GetUerId,
  PostStudentInfoReducer,
  AuthReducer,
  AppointmentBookReducer,
  GetStudentInfoReducer,
});

export default rootReducer;
