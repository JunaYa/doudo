import axios from 'axios';

function httpGET(url, params) {
    return axios({
        method: 'GET',
        url,
        params,
      });
}

function httpPOST(url, data) {
    return axios({
        method: 'POST',
        url,
        data,
      });
}

function httpDELETE(url, data) {
    return axios({
        method: 'DELETE',
        url,
        data,
      });
}

export {
    httpGET,
    httpPOST,
    httpDELETE,
}