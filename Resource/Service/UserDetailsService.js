import { config } from "../Helper/Config";





export const UserDetailsService = {
    PostStudentInfoService,
    PostStudentQualificationService,
    PostStudentWorkExpService,
    PostStudentMeritalStatusService,
    PostIELTSService,
    PostPrerefusalService,
    GetStudentInfoService,
    GetQulificationService,
    GetWorkExperianceService,
    GetMeritalSatusService,
    GetIELTSService,
    GetPreviousRefuisalService
    
}


async function PostStudentInfoService(postData) {
    console.log("Post", postData)
    var URL = config.API_URL+"add-stu-info.php"
    const requestOptions = {
        method: 'POST',

        headers: {

            'Content-Type': 'multipart/form-data'
        },
        body: postData
    };
 console.log("URL", URL)

    return fetch(URL, requestOptions)
        .then(handleResponse)
        .then(response => {

     console.log(response,'response');
            return response;
        }).catch((err) => {
            console.log(err, '__+_+_');
        });
}

// STUDENT QULIFICATION

async function PostStudentQualificationService(postData) {
    console.log("Post", postData)
    var URL = config.API_URL+"stu-quali.php"
    const requestOptions = {
        method: 'POST',

        headers: {

            'Content-Type': 'multipart/form-data'
        },
        body: postData
    };
 console.log("URL", URL)

    return fetch(URL, requestOptions)
        .then(handleResponse)
        .then(response => {

     console.log(response,'response');
            return response;
        }).catch((err) => {
            console.log(err, '__+_+_');
        });
}

// work experiance



async function PostStudentWorkExpService(postData) {
    console.log("Post", postData)
    var URL = config.API_URL+"stu-work-exp.php"
    const requestOptions = {
        method: 'POST',

        headers: {

            'Content-Type': 'multipart/form-data'
        },
        body: postData
    };
 console.log("URL", URL)

    return fetch(URL, requestOptions)
        .then(handleResponse)
        .then(response => {

     console.log(response,'response');
            return response;
        }).catch((err) => {
            console.log(err, '__+_+_');
        });
}

async function PostStudentMeritalStatusService(postData) {
    console.log("Post", postData)
    var URL = config.API_URL+"stu-marital.php"
    const requestOptions = {
        method: 'POST',

        headers: {

            'Content-Type': 'multipart/form-data'
        },
        body: postData
    };
 console.log("URL", URL)

    return fetch(URL, requestOptions)
        .then(handleResponse)
        .then(response => {

     console.log(response,'response');
            return response;
        }).catch((err) => {
            console.log(err, '__+_+_');
        });
}

// IELTS

async function PostIELTSService(postData) {
    console.log("Post", postData)
    var URL = config.API_URL+"stu-ielts.php"
    const requestOptions = {
        method: 'POST',

        headers: {

            'Content-Type': 'multipart/form-data'
        },
        body: postData
    };
 console.log("URL", URL)

    return fetch(URL, requestOptions)
        .then(handleResponse)
        .then(response => {

     console.log(response,'response');
            return response;
        }).catch((err) => {
            console.log(err, '__+_+_');
        });
}


// post pre refusal 

async function PostPrerefusalService(postData) {
    console.log("Post", postData)
    var URL = config.API_URL+"stu-pre-refusal.php"
    const requestOptions = {
        method: 'POST',

        headers: {

            'Content-Type': 'multipart/form-data'
        },
        body: postData
    };
 console.log("URL", URL)

    return fetch(URL, requestOptions)
        .then(handleResponse)
        .then(response => {

     console.log(response,'response');
            return response;
        }).catch((err) => {
            console.log(err, '__+_+_');
        });
}

// get sudent info 
async function GetStudentInfoService(postData) {
    console.log("Post", postData)
    var URL = config.API_URL+"get-stu-info.php?id="+postData
    const requestOptions = {
        method: 'POST',

        headers: {

            'Content-Type': 'multipart/form-data'
        },
        body: postData
    };
 console.log("URL", URL)

    return fetch(URL, requestOptions)
        .then(handleResponse)
        .then(response => {
            return response;
        }).catch((err) => {
            console.log(err, '__+_+_');
        });
}

// get student qulification

async function GetQulificationService(postData) {
    console.log("Post", postData)
    var URL = config.API_URL+"get-stu-quali.php?stu_id="+postData
    const requestOptions = {
        method: 'POST',

        headers: {

            'Content-Type': 'multipart/form-data'
        },
        body: postData
    };
 console.log("URL", URL)

    return fetch(URL, requestOptions)
        .then(handleResponse)
        .then(response => {
            return response;
        }).catch((err) => {
            console.log(err, '__+_+_');
        });
}


// get student work experiance

async function GetWorkExperianceService(postData) {
    var URL = config.API_URL+"get-stu-exp.php?stu_id="+postData
    const requestOptions = {
        method: 'POST',

        headers: {

            'Content-Type': 'multipart/form-data'
        },
        body: postData
    };
//  console.log("URL", URL)

    return fetch(URL, requestOptions)
        .then(handleResponse)
        .then(response => {
            return response;
        }).catch((err) => {
            console.log(err, '__+_+_');
        });
}

// get merital status

async function GetMeritalSatusService(postData) {
    var URL = config.API_URL+"get-stu-marital.php?stu_id="+postData
    const requestOptions = {
        method: 'POST',

        headers: {

            'Content-Type': 'multipart/form-data'
        },
        body: postData
    };
//  console.log("URL", URL)

    return fetch(URL, requestOptions)
        .then(handleResponse)
        .then(response => {
            return response;
        }).catch((err) => {
            console.log(err, '__+_+_');
        });
}


//get IELTS data

async function GetIELTSService(postData) {
    var URL = config.API_URL+"get-stu-ielts.php?stu_id="+postData
    const requestOptions = {
        method: 'POST',

        headers: {

            'Content-Type': 'multipart/form-data'
        },
        body: postData
    };
//  console.log("URL", URL)

    return fetch(URL, requestOptions)
        .then(handleResponse)
        .then(response => {
            return response;
        }).catch((err) => {
            console.log(err, '__+_+_');
        });
}


// get country previous refusal 

async function GetPreviousRefuisalService(postData) {
    var URL = config.API_URL+"get-stu-refusal.php?stu_id="+postData
    const requestOptions = {
        method: 'GET',

        headers: {

            'Content-Type': 'multipart/form-data'
        },
       // body: postData
    };
 console.log("URL", URL)

    return fetch(URL, requestOptions)
        .then(handleResponse)
        .then(response => {
            return response;
        }).catch((err) => {
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