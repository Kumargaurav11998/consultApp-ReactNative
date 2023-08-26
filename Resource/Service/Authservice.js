import {config} from '../Helper/Config';

export const AuthService = {
  LoginWithMobile,
  CheckAccountService,
  GetOTPService,
  VerifyOTPService,
};

async function LoginWithMobile(Mobile, date_time) {
  console.log('Post', Mobile, date_time);
  var URL =
    config.API_URL + 'login.php?mobile=' + Mobile + '&date_time=' + date_time;
  const requestOptions = {
    method: 'GET',

    headers: {
      'Content-Type': 'multipart/form-data',
    },
    //body: postData
  };
  console.log('URL', URL);

  return fetch(URL, requestOptions)
    .then(handleResponse)
    .then(response => {
      //  console.log(response,'response');
      return response;
    })
    .catch(err => {
      console.log(err, '__+_+_');
    });
}

// check account

async function CheckAccountService(Mobile) {
  //  console.log("Post", Mobile)
  var URL = config.API_URL + 'check-profile.php?mobile=' + Mobile;
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    //body: postData
  };
  //console.log('URL', URL);

  return fetch(URL, requestOptions)
    .then(handleResponse)
    .then(response => {
      //  console.log(response,'response');
      return response;
    })
    .catch(err => {
      console.log(err, '__+_+_');
    });
}
// get otp number
async function GetOTPService(Mobile) {
  //  console.log("Post", Mobile)
  var URL =
    'https://mettlecrowsolutions.com/apps/apis/angels/send-verify-otp.php?action=send_otp&mobile=' +
    Mobile;
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    //body: postData
  };
  // console.log("URL", URL)

  return fetch(URL, requestOptions)
    .then(handleResponse)
    .then(response => {
      //  console.log(response,'response');
      return response;
    })
    .catch(err => {
      console.log(err, '__+_+_');
    });
}
//verify otp

async function VerifyOTPService(otp) {
  //  console.log("Post", Mobile)
  var URL =
    'https://mettlecrowsolutions.com/apps/apis/angels/send-verify-otp.php?action=verify_otp&otp=' +
    otp;
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    //body: postData
  };
  console.log('URL', URL);

  return fetch(URL, requestOptions)
    .then(handleResponse)
    .then(response => {
      //  console.log(response,'response');
      return response;
    })
    .catch(err => {
      console.log(err, '__+_+_');
    });
}

function handleResponse(response) {
  /// console.log('response////////////////////',response)
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    //console.log('service-------------', data)
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      // console.log("**********", error)

      return Promise.reject(error);
    }

    return data;
  });
}
