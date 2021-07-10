const SAVE_EMAIL = 'SAVE_EMAIL';
const SAVE_EXPENSES = 'SAVE_EXPENSES';
const REQUEST_WALLET_SUCCESS = 'REQUEST_WALLET_SUCCESS';
const REMOVE_EXPENSES = 'REMOVE_EXPENSES';

/// //////
const saveEmailAction = (payload) => ({
  type: SAVE_EMAIL,
  payload,
});

/// ///

const saveExpenses = (payload) => ({
  type: SAVE_EXPENSES,
  payload,
});

/// //

const removeExpenses = (payload) => ({
  type: REMOVE_EXPENSES,
  payload,
});

//////

// const requestCurrency = (payload) => ({
//   type: REQUEST_WALLET,
//   payload
// })

const requestCurrencySuccess = (payload) => ({
  type: REQUEST_WALLET_SUCCESS,
  payload,
});

// const requestCurrencyError = (payload) => ({
//   type: REQUEST_WALLET_ERROR,
//   payload
// })

const fetchCurrency = () => (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
  .then((result) => result.json())
  .then((data) => dispatch(requestCurrencySuccess(data)));

const actionFunctions = {
  saveEmailAction,
  saveExpenses,
  fetchCurrency,
  removeExpenses,
};

export default actionFunctions;
