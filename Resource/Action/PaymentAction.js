import {PAYMENT_ACTION_TYPE} from '../ActionType/PaymentActionType';
import {PaymentService} from '../Service/paymentService';

export const PaymentAction = {
  PostPaymentSuccessfulDetail,
};

function PostPaymentSuccessfulDetail(Data) {
  return dispatch => {
    dispatch(request());
    return PaymentService.PostPaymentSuccesfullService(Data).then(
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
      type: PAYMENT_ACTION_TYPE.POST_PAYMENT_DETAIL_REQUEST,
    };
  }
  function success(data) {
    return {type: PAYMENT_ACTION_TYPE.POST_PAYMENT_DETAIL_SUCCESS, data};
  }
  function failure(error) {
    return {type: PAYMENT_ACTION_TYPE.POST_PAYMENT_DETAIL_FAILURE, error};
  }
}
