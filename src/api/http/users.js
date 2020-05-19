import { httpPOST } from '@/api/http/base.js';
import endpoint from '@/api/endpoint/users';

function login(params) {
  return httpPOST(endpoint.LOGIN, params);
}

function register(params) {
  return httpPOST(endpoint.REGISTER, params);
}

export default {
  login,
  register
};
