export const LOGIN = 'LOGIN';

export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RECEIVED_CURRENCIES = 'RECEIVED_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const logInWallet = (value) => ({
  type: LOGIN,
  payload: value,
});

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const receivedCurrencies = (payload) => ({
  type: RECEIVED_CURRENCIES,
  payload,
});

export const addExpense = (expenses, currencies) => ({
  type: ADD_EXPENSE,
  payload: [expenses, currencies],
});

export function fetchCurrency() {
  return (dispatch) => {
    dispatch(requestCurrencies());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((data) => data.json())
      .then((result) => dispatch(receivedCurrencies(result)));
  };
}
