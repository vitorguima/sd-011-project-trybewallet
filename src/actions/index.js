export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCESS = 'REQUEST_API_SUCESS';
export const REQUEST_API_ERROR = 'REQUEST_API_ERROR';

const requestApi = (payload) => ({
  type: REQUEST_API,
  payload,
});

const requestApiSucess = (payload) => ({
  type: REQUEST_API_SUCESS,
  payload,
});

const requestApiError = (payload) => ({
  type: REQUEST_API_ERROR,
  payload,
});

const API = 'https://economia.awesomeapi.com.br/json/all';
export const fetchApi = () => (dispatch) => {
  dispatch(requestApi());
  return fetch(API)
    .then((result) => result.json())
    .then((data) => dispatch(requestApiSucess(data)))
    .catch((error) => dispatch(requestApiError(error)));
};
