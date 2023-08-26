import { USER_DETAILS_ACTION_TYPE } from "../ActionType/UserDetailsActionType";
import { UserDetailsService } from "../Service/UserDetailsService";

export const UserDetailsAction = {
    
    PostStudentInfoAction,
    PostStudentQualificationAction,
    PostStudentwORKEXPAction,
    PostMeritalStatusAction,
    PostIELTSsAction,
    PostPreRefusalAction,
    GetStudentInfoAction,
    GetqulificationAction,
    GetWorkExeprianceAction,
    GetMeritalStatusAction,
    GetIELTSAction,
    GetPreviousRefusalAction

}

function PostStudentInfoAction(data) {

    return dispatch => {
        dispatch(request());
        return UserDetailsService.PostStudentInfoService(data).then(
            response => {
                dispatch(success(response))
                return Promise.resolve(response);
            },
            error => {
                dispatch(failure(error));
                return Promise.reject();
            }
        )
    }
    function request() {
        return {
            type: USER_DETAILS_ACTION_TYPE.POST_STUDENT_INFO_REQUEST
        }
    }
    function success(data) {

        return { type: USER_DETAILS_ACTION_TYPE.POST_STUDENT_INFO_SUCCESS, data };
    }
    function failure(error) {
        return { type: USER_DETAILS_ACTION_TYPE.POST_STUDENT_INFO_FAILURE, error };
    }

}

function PostStudentQualificationAction(data) {

    return dispatch => {
        dispatch(request());
        return UserDetailsService.PostStudentQualificationService(data).then(
            response => {
                dispatch(success(response))
                return Promise.resolve(response);
            },
            error => {
                dispatch(failure(error));
                return Promise.reject();
            }
        )
    }
    function request() {
        return {
            type: USER_DETAILS_ACTION_TYPE.POST_STUDENT_QUALIFICTION_REQUEST
        }
    }
    function success(data) {

        return { type: USER_DETAILS_ACTION_TYPE.POST_STUDENT_QUALIFICTION_SUCCESS, data };
    }
    function failure(error) {
        return { type: USER_DETAILS_ACTION_TYPE.POST_STUDENT_QUALIFICTION_FAILURE, error };
    }

}

function PostStudentwORKEXPAction(data) {

    return dispatch => {
        dispatch(request());
        return UserDetailsService.PostStudentWorkExpService(data).then(
            response => {
                dispatch(success(response))
                return Promise.resolve(response);
            },
            error => {
                dispatch(failure(error));
                return Promise.reject();
            }
        )
    }
    function request() {
        return {
            type: USER_DETAILS_ACTION_TYPE.POST_STUDENT_WORK_EXP_REQUEST
        }
    }
    function success(data) {

        return { type: USER_DETAILS_ACTION_TYPE.POST_STUDENT_INFO_SUCCESS, data };
    }
    function failure(error) {
        return { type: USER_DETAILS_ACTION_TYPE.POST_STUDENT_INFO_FAILURE, error };
    }

}

function PostMeritalStatusAction(data) {

    return dispatch => {
        dispatch(request());
        return UserDetailsService.PostStudentMeritalStatusService(data).then(
            response => {
                dispatch(success(response))
                return Promise.resolve(response);
            },
            error => {
                dispatch(failure(error));
                return Promise.reject();
            }
        )
    }
    function request() {
        return {
            type: USER_DETAILS_ACTION_TYPE.POST_STUDENT_MERITAL_STATUS_REQUEST
        }
    }
    function success(data) {

        return { type: USER_DETAILS_ACTION_TYPE.POST_STUDENT_MERITAL_STATUS_SUCCESS, data };
    }
    function failure(error) {
        return { type: USER_DETAILS_ACTION_TYPE.POST_STUDENT_MERITAL_STATUS_FAILURE, error };
    }

}

// ielts

function PostIELTSsAction(data) {

    return dispatch => {
        dispatch(request());
        return UserDetailsService.PostIELTSService(data).then(
            response => {
                dispatch(success(response))
                return Promise.resolve(response);
            },
            error => {
                dispatch(failure(error));
                return Promise.reject();
            }
        )
    }
    function request() {
        return {
            type: USER_DETAILS_ACTION_TYPE.POST_STUDENT_IELTS_REQUEST
        }
    }
    function success(data) {

        return { type: USER_DETAILS_ACTION_TYPE.POST_STUDENT_IELTS_SUCCESS, data };
    }
    function failure(error) {
        return { type: USER_DETAILS_ACTION_TYPE.POST_STUDENT_IELTS_FAILURE, error };
    }

}


// PRE REFUSAL

function PostPreRefusalAction(data) {

    return dispatch => {
        dispatch(request());
        return UserDetailsService.PostPrerefusalService(data).then(
            response => {
                dispatch(success(response))
                return Promise.resolve(response);
            },
            error => {
                dispatch(failure(error));
                return Promise.reject();
            }
        )
    }
    function request() {
        return {
            type: USER_DETAILS_ACTION_TYPE.POST_STUDENT_PRE_REFUSAL_REQUEST
        }
    }
    function success(data) {

        return { type: USER_DETAILS_ACTION_TYPE.POST_STUDENT_PRE_REFUSAL_SUCCESS, data };
    }
    function failure(error) {
        return { type: USER_DETAILS_ACTION_TYPE.POST_STUDENT_PRE_REFUSAL_FAILURE, error };
    }

}

// GET STUDENT INFO 

function GetStudentInfoAction(data) {

    return dispatch => {
        dispatch(request());
        return UserDetailsService.GetStudentInfoService(data).then(
            response => {
                dispatch(success(response))
                return Promise.resolve(response);
            },
            error => {
                dispatch(failure(error));
                return Promise.reject();
            }
        )
    }
    function request() {
        return {
            type: USER_DETAILS_ACTION_TYPE.GET_STUDENT_INFO_REQUEST
        }
    }
    function success(data) {

        return { type: USER_DETAILS_ACTION_TYPE.GET_STUDENT_INFO_SUCCESS, data };
    }
    function failure(error) {
        return { type: USER_DETAILS_ACTION_TYPE.GET_STUDENT_INFO_FAILURE, error };
    }

}

// GET STUDENT QULIFICATION 

function GetqulificationAction(data) {

    return dispatch => {
        dispatch(request());
        return UserDetailsService.GetQulificationService(data).then(
            response => {
                dispatch(success(response))
                return Promise.resolve(response);
            },
            error => {
                dispatch(failure(error));
                return Promise.reject();
            }
        )
    }
    function request() {
        return {
            type: USER_DETAILS_ACTION_TYPE.GET_STUDENT_QUALIFICTION_REQUEST
        }
    }
    function success(data) {

        return { type: USER_DETAILS_ACTION_TYPE.GET_STUDENT_INFO_SUCCESS, data };
    }
    function failure(error) {
        return { type: USER_DETAILS_ACTION_TYPE.GET_STUDENT_INFO_FAILURE, error };
    }

}

// GET STUDENT WORK EXPERIANCE 

function GetWorkExeprianceAction(data) {

    return dispatch => {
        dispatch(request());
        return UserDetailsService.GetWorkExperianceService(data).then(
            response => {
                dispatch(success(response))
                return Promise.resolve(response);
            },
            error => {
                dispatch(failure(error));
                return Promise.reject();
            }
        )
    }
    function request() {
        return {
            type: USER_DETAILS_ACTION_TYPE.GET_STUDENT_QUALIFICTION_REQUEST
        }
    }
    function success(data) {

        return { type: USER_DETAILS_ACTION_TYPE.GET_STUDENT_INFO_SUCCESS, data };
    }
    function failure(error) {
        return { type: USER_DETAILS_ACTION_TYPE.GET_STUDENT_INFO_FAILURE, error };
    }

}

// GET STUDENT MERITAL STATUS

function GetMeritalStatusAction(data) {

    return dispatch => {
        dispatch(request());
        return UserDetailsService.GetMeritalSatusService(data).then(
            response => {
                dispatch(success(response))
                return Promise.resolve(response);
            },
            error => {
                dispatch(failure(error));
                return Promise.reject();
            }
        )
    }
    function request() {
        return {
            type: USER_DETAILS_ACTION_TYPE.GET_STUDENT_MERITAL_STATUS_REQUEST
        }
    }
    function success(data) {

        return { type: USER_DETAILS_ACTION_TYPE.GET_STUDENT_MERITAL_STATUS_SUCCESS, data };
    }
    function failure(error) {
        return { type: USER_DETAILS_ACTION_TYPE.GET_STUDENT_MERITAL_STATUS_FAILURE, error };
    }

}

// Get IELTs Status

function GetIELTSAction(data) {

    return dispatch => {
        dispatch(request());
        return UserDetailsService.GetIELTSService(data).then(
            response => {
                dispatch(success(response))
                return Promise.resolve(response);
            },
            error => {
                dispatch(failure(error));
                return Promise.reject();
            }
        )
    }
    function request() {
        return {
            type: USER_DETAILS_ACTION_TYPE.GET_STUDENT_IELTS_REQUEST
        }
    }
    function success(data) {

        return { type: USER_DETAILS_ACTION_TYPE.GET_STUDENT_IELTS_SUCCESS, data };
    }
    function failure(error) {
        return { type: USER_DETAILS_ACTION_TYPE.GET_STUDENT_IELTS_FAILURE, error };
    }

}

// GET PREVIOUS REFUSAL 

function GetPreviousRefusalAction(data) {

    return dispatch => {
        dispatch(request());
        return UserDetailsService.GetPreviousRefuisalService(data).then(
            response => {
                dispatch(success(response))
                return Promise.resolve(response);
            },
            error => {
                dispatch(failure(error));
                return Promise.reject();
            }
        )
    }
    function request() {
        return {
            type: USER_DETAILS_ACTION_TYPE.GET_STUDENT_PRE_REFUSAL_REQUEST
        }
    }
    function success(data) {

        return { type: USER_DETAILS_ACTION_TYPE.GET_STUDENT_PRE_REFUSAL_SUCCESS, data };
    }
    function failure(error) {
        return { type: USER_DETAILS_ACTION_TYPE.GET_STUDENT_INFO_FAILURE, error };
    }

}
