import {
  EMAIL,
  REQUEST_API,
  REQUEST_API_SUCCESS,
  REQUEST_API_ERROR,
  ADD_EXPENSES,
} from './actionTypes';

export const UserLogin = (email) => ({
  type: EMAIL,
  email,
});

export const AddExpenses = (expenses, id) => ({
  type: ADD_EXPENSES,
  expenses,
  id,
});

const requestAPI = () => ({ type: REQUEST_API });
const requestApiSuccess = (value) => ({
  type: REQUEST_API_SUCCESS,
  value,
});
const requestApiError = (value) => ({
  type: REQUEST_API_ERROR,
  value,
});

export function fetchCurrency() {
  return (dispatch) => {
    dispatch(requestAPI());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencies) => dispatch(requestApiSuccess(currencies)))
      .catch((error) => dispatch(requestApiError(error)));
  };
}

export function fetchExpenses() {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((expenses) => dispatch(AddExpenses(expenses)))
    .catch((error) => dispatch(requestApiError(error)));
}
