import axios from 'axios';

function httpGET(url: string, params: any) {
  return axios({
    method: 'GET',
    url,
    params
  });
}

function httpPOST(url: string, data: any) {
  return axios({
    method: 'POST',
    url,
    data
  });
}

function httpDELETE(url: string, data: any) {
  return axios({
    method: 'DELETE',
    url,
    data
  });
}

export { httpGET, httpPOST, httpDELETE };
