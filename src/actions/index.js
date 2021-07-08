const USER_LOGIN = 'USER_LOGIN';
const REQUEST_API = 'REQUEST_API';
const GET_DATA = 'GET_DATA';

export const requestAPI = () => ({ type: REQUEST_API });

export const getData = (data) => ({ type: GET_DATA, data });



export function loginValidation(email) {
  return {
    type: USER_LOGIN,
    email,
  };
}