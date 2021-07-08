import history from '../history';

export const SEND_SUBMIT = 'SEND_SUBMIT';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const REQUEST_API_FAIL = 'REQUEST_API_FAIL';
export const ADD_EXPENSE_SUCCESS = 'ADD_EXPENSE_SUCCESS';
export const ADD_EXPENSE_FAIL = 'ADD_EXPENSE_FAIL';
const INITIAL_ID = -1;

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

function addExpenseFail(error) {
  return { type: ADD_EXPENSE_FAIL, payload: error };
}
let id = INITIAL_ID;

function addExpenseSuccess(exchangeRates, data) {
  id += 1;
  return { type: ADD_EXPENSE_SUCCESS,
    payload:
    { ...data, exchangeRates, id } };
}

export function addExpense(data) {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then(
      (json) => dispatch(addExpenseSuccess(json, data)),
      (error) => dispatch(addExpenseFail(error)),
    );
}
