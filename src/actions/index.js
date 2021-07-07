const USER_LOGIN = 'USER_LOGIN';
const REQUEST_API = 'REQUEST_API';
const GET_DATA = 'GET_DATA';

export const requestAPI = () => ({ typ: REQUEST_API });

export const getData = (data) => ({ type: GET_DATA, data });

export function fetchAPI() {
  return async (dispatch) => {
    dispatch(requestAPI());
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    dispatch(getData(data));
  };
}

export function loginValidation(email) {
  return {
    type: USER_LOGIN,
    email,
  };
}
