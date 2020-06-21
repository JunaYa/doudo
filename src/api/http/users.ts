/* eslint-disable @typescript-eslint/no-explicit-any */
import { httpPOST } from '@/api/http/base.ts';
import endpoint from '@/api/endpoint/users.ts';

function login(params: any) {
  return httpPOST(endpoint.LOGIN, params);
}

function register(params: any) {
  return httpPOST(endpoint.REGISTER, params);
}

export default {
  login,
  register
};
