export const SET_EMAIL = 'SET_EMAIL';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const SET_EXPENSE = 'SET_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const SET_EDITED_EXPENSE = 'SET_EDITED_EXPENSE';

export const emailAction = (email) => (
  {
    type: SET_EMAIL,
    email,
  }
);

const requestCurrencies = () => (
  {
    type: REQUEST_CURRENCIES,
  }
);

const getCurrencies = (json) => (
  {
    type: GET_CURRENCIES,
    currencies: json,
  }
);

const failedRequest = (error) => (
  {
    type: FAILED_REQUEST,
    currencies: error,
  }
);

export const fetchCurrencies = () => (dispatch) => {
  dispatch(requestCurrencies());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((r) => r.json())
    .then(
      (json) => dispatch(getCurrencies(json)),
      (error) => dispatch(failedRequest(error)),
    );
};

export const expenseAction = (expense) => (
  {
    type: SET_EXPENSE,
    expense,
    value: expense.value,
  }
);

export const expenseRemoveAction = (expense) => (
  {
    type: REMOVE_EXPENSE,
    expense,
  }
);

export const expenseEditAction = (expense) => (
  {
    type: EDIT_EXPENSE,
    editing: true,
    editExpense: expense,
  }
);

export const setEditedExpense = (expense, editedExpense) => (
  {
    type: SET_EDITED_EXPENSE,
    editing: false,
    expense,
    editedExpense,
  }
);
