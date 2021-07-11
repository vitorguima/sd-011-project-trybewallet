// Coloque aqui suas actions
export const INPUT_USER = 'INPUT_USER';
export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const REQUEST_API_ERROR = 'REQUEST_API_ERROR';

const inputUser = (email) => ({
  type: INPUT_USER,
  email,
});

const requestApi = (payload) => ({
  type: REQUEST_API,
  payload,
});

const requestApiSuccess = (payload) => ({
  type: REQUEST_API_SUCCESS,
  payload,
});

// const requestApiError = (payload) => ({
//   type: REQUEST_API_ERROR,
//   payload,
// });

export function fetchApi() {
  return (dispatch) => {
    dispatch(requestApi());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((data) => data.json())
      .then((results) => dispatch(requestApiSuccess(Object.keys(results))));
  };
}

export default inputUser;
