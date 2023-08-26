import {config} from '../Helper/Config';

export const AppointmentService = {
  BookAppointmentService,
  GetUpcomingAppointmentService,
};

async function BookAppointmentService(postData) {
  console.log('Post', postData);
  var URL = config.API_URL + 'add-appointment.php';
  const requestOptions = {
    method: 'POST',

    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: postData,
  };
  return fetch(URL, requestOptions)
    .then(handleResponse)
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err, '__+_+_');
    });
}

// GET UPCOMING APPOINTMENT

async function GetUpcomingAppointmentService(postData) {
  console.log('Post', postData);
  var URL = config.API_URL + 'get-appointments.php?id=' + postData;
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    // body: postData,
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
