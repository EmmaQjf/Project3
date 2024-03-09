import sendRequest from './send-request';

const BASE_URL = '/api/users';

//signUP, send the data to the backend, fetch the token from the database
export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}
//Login, send the data to the backend, fetch the token from the database
export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}