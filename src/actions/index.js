import history from '../history';

export const SEND_SUBMIT = 'SEND_SUBMIT';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const REQUEST_API_FAIL = 'REQUEST_API_FAIL';

export function handleLogin(email) {
  history.push('/carteira');
  return { type: SEND_SUBMIT, payload: email };
}

function handleAPISuccess(json) {
  return { type: REQUEST_API_SUCCESS, payload: json };
}

function handleAPIFail(error) {
  return { type: REQUEST_API_FAIL, payload: error };
}

export function fetchAPI() {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then(
      (json) => dispatch(handleAPISuccess(json)),
      (error) => dispatch(handleAPIFail(error)),
    );
}
