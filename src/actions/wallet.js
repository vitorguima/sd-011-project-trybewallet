export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const UPDATE_CURRENCY = 'UPDATE_CURRENCY';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

const requestCurrenciesSuccess = (currencies) => ({
  type: REQUEST_SUCCESS,
  currencies,
});

export const fetchCurrencies = () => (dispatch) => {
  dispatch(requestCurrencies());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((result) => result.json())
    .then((currencies) => dispatch(requestCurrenciesSuccess(currencies)));
};

// const requestUpdatedCurrencySuccess = (currencies) => ({
//   type: UPDATE_CURRENCY,
//   currencies,
// });

export const addExpense = (state, updateCurrencies) => ({
  type: ADD_EXPENSE,
  state,
  updateCurrencies,
});

export const updateCurrencyToNewExpense = (state) => (dispatch) => {
  dispatch(requestCurrencies());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((result) => result.json())
    //  .then((currencies) => dispatch(requestCurrenciesSuccess(Object.values(currencies))))
    //  .then((currencies) => dispatch(requestUpdatedCurrencySuccess(currencies)))
    .then((currencies) => dispatch(requestCurrenciesSuccess(currencies)))
    .then((updateCurrencies) => dispatch(addExpense(state, updateCurrencies)));
};

export const deleteExpense = (expense) => ({
  type: DELETE_EXPENSE,
  expense,
});
