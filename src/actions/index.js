export const GET_USER_EMAIL = 'GET_USER_EMAIL';

export const getUserEmail = (email) => ({
  type: GET_USER_EMAIL,
  email,
});

export const SAVE_EXPENSE = 'SAVE_EXPENSE';

export const saveExpense = (expense) => ({
  type: SAVE_EXPENSE,
  expense,
});

export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const deleteExpense = (expense) => ({
  type: DELETE_EXPENSE,
  expense,
});

export const REQUEST_API = 'REQUEST_API';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const GET_API = 'GET_API';

export const getApi = (json) => ({
  type: GET_API,
  json,
});

export const requestApi = () => ({
  type: REQUEST_API,
});

export const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  error,
});

export function fetchApi() {
  return (dispatch) => {
    dispatch(requestApi());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((json) => dispatch(getApi(json),
        (error) => dispatch(failedRequest(error))));
  };
}
