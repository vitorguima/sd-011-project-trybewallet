// Coloque aqui suas actions
export const USER_EMAIL = 'USER_EMAIL';
export const SPEND_WALLET = 'SPEND_WALLET';

export const setEmailStore = (email) => ({
  type: USER_EMAIL,
  email,
});

export const requestWallet = (payload) => ({
  type: SPEND_WALLET,
  payload,
});

export const isFetching = () => (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
  .then((response) => response.json())
  .then((currencies) => dispatch(requestWallet(Object.values(currencies))));
