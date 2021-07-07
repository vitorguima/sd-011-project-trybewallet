export const SEND_EMAIL = 'SEND_EMAIL';

export const loginAction = (payload) => ({
  type: SEND_EMAIL,
  payload,
});

export const requestCurrencies = (payload) => ({
  type: 'GET_CURRENCIES',
  payload,
});

export const fetchCurrencies = () => (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
  .then((response) => response.json())
  .then((currencies) => dispatch(requestCurrencies(Object.values(currencies))));
