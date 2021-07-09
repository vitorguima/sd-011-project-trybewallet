export const USER_LOGIN = 'USER_LOGIN';
export const REQUEST_API = 'REQUEST_API';
export const GET_DATA = 'GET_DATA';
export const EXPENSE_WALLET = 'EXPENSE_WALLET';
export const DELETE_EXPENSES = 'DELETE_EXPENSES';
export const requestAPI = () => ({ type: REQUEST_API });

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

export function expensesValidation(expenses) {
  return {
    type: EXPENSE_WALLET,
    expenses,
  };
}

export function expensesDelete(expense) {
  return {
    type: DELETE_EXPENSES,
    expense,
  };
}
