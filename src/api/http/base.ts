import axios from 'axios';

function httpGET(url: string, params: string) {
  return axios({
    method: 'GET',
    url,
    params
  });
}

function httpPOST(url: string, data: string) {
  return axios({
    method: 'POST',
    url,
    data
  });
}

function httpDELETE(url: string, data: string) {
  return axios({
    method: 'DELETE',
    url,
    data
  });
}

export { httpGET, httpPOST, httpDELETE };
