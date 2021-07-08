export const SEND_EMAIL = 'SEND_EMAIL';

export const loginAction = (payload) => ({
  type: SEND_EMAIL,
  payload,
});

export const requestCurrencies = (payload) => ({
  type: 'GET_CURRENCIES',
  payload,
});

export const requestCurrenciesData = (payload) => ({
  type: 'GET_CURRENCIES_DATA',
  payload,
});

export const sendWalletInfo = (state) => ({
  type: 'SEND_INFO',
  state,
});

export const deleteExpense = (payload) => ({
  type: 'DELETE_EXPENSE',
  payload,
});

export function fetchCurrencies() {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((currencies) => dispatch(requestCurrencies(currencies)));
}
