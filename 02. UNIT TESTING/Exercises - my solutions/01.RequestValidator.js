function validateRequest(request) {

    let isMethodValid = false;
    let isUriValid = false;
    let isVersionValid = false;
    let isMessageValid = false;

    let uriReg = /^([\w.]+)$/gm;
    let messageReg = /^([^<>\\&'"]+)$/gm;


    if (request.hasOwnProperty('method')) {
        isMethodValid = methodValidation(request);
        if(!isMethodValid){
            printErrorMessage('Method');
        }
    } else {
        printErrorMessage('Method');
    }
    if (request.hasOwnProperty('uri')) {
        isUriValid = uriValidation(request);
        if(!isUriValid){
            printErrorMessage('URI');
        }
    } else {
        printErrorMessage('URI');
    }
    if (request.hasOwnProperty('version')) {
        isVersionValid = versionValidation(request);
        if(!isVersionValid){
            printErrorMessage('Version');
        }
    } else {
        printErrorMessage('Version');
    }
    if (request.hasOwnProperty('message')) {
        isMessageValid = messageValidation(request);
        if(!isMessageValid){
            printErrorMessage('Message');
        }
    } else {
        printErrorMessage('Message');
    }

    if (isMethodValid === true && isUriValid === true && isVersionValid === true && isMessageValid === true) {
        return request;
    }

    function printErrorMessage(header) {
        throw new Error(`Invalid request header: Invalid ${header}`)
    }

    function methodValidation(request) {
        if (request.method === 'GET' ||
            request.method === 'POST' ||
            request.method === 'DELETE' ||
            request.method === 'CONNECT') {

            return true;
        }
        return false;
    }

    function uriValidation(request) {
        if (request.uri === '*' || uriReg.test(request.uri)) {
            return true;
        }
        return false;
    }

    function versionValidation(request) {
        if (request.version === 'HTTP/0.9' ||
            request.version === 'HTTP/1.0' ||
            request.version === 'HTTP/1.1' ||
            request.version === 'HTTP/2.0') {

            return true;
        }
        return false;
    }

    function messageValidation(request) {
        if (messageReg.test(request.message) || request.message === '') {
            return true;
        }
        return false;
    }
}

let test0 = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
};

let test1 = {
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
};


let test2 = {
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'

};

console.log(validateRequest(test0));
console.log(validateRequest(test1));
console.log(validateRequest(test2));


