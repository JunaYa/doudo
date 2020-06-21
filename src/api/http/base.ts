import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function httpGET(url: string, params?: any) {
  return axios({
    method: 'GET',
    url,
    params
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function httpPOST(url: string, data: any) {
  return axios({
    method: 'POST',
    url,
    data
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function httpDELETE(url: string, data?: any) {
  return axios({
    method: 'DELETE',
    url,
    data
  });
}

export { httpGET, httpPOST, httpDELETE };
