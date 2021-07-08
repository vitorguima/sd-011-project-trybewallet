export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REQUEST_DATA = 'REQUEST_DATA';
export const REQUEST_DATA_SUCCESS = 'REQUEST_DATA_SUCCESS';

export const loginAction = (payload) => ({
  type: LOGIN,
  payload,
});

export const expenseAction = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

const requestData = (payload) => ({
  type: REQUEST_DATA,
  payload,
});

const requestDataSuccess = (payload) => ({
  type: REQUEST_DATA_SUCCESS,
  payload,
});

export const fetchData = () => (dispatch) => {
  dispatch(requestData());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((result) => result.json())
    .then((data) => dispatch(requestDataSuccess(data)));
};
