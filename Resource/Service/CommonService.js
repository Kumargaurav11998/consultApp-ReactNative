import {config} from '../Helper/Config';

export const CommonService = {
  GetTimeSlotService,
  ComonTermAndConditionService,
};

async function GetTimeSlotService(day) {
  console.log('Post', day);
  var URL = config.API_URL + 'get-day-timeslots.php?day=' + day;
  const requestOptions = {
    method: 'GET',

    headers: {
      'Content-Type': 'multipart/form-data',
    },
    //  body: postData
  };
  console.log(URL);
  return fetch(URL, requestOptions)
    .then(handleResponse)
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err, '__+_+_');
    });
}

// Api for Coomon account and policies

async function ComonTermAndConditionService(about) {
  console.log('Post', about);
  var URL = config.API_URL + 'get-static-content.php?title=' + about;
  const requestOptions = {
    method: 'GET',

    headers: {
      'Content-Type': 'multipart/form-data',
    },
    //  body: postData
  };
  console.log(URL);
  return fetch(URL, requestOptions)
    .then(handleResponse)
    .then(response => {
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
