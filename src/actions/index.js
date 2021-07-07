const sendEmail = (payload) => ({
  type: 'SEND_EMAIL',
  payload,
});

export default sendEmail;

export const requestCoin = () => ({
  type: 'REQUEST_COIN',
});

export const requestCoinsSucess = (payload) => ({
  type: 'REQUEST_SUCESS',
  payload,
});

export const requestCoinsError = (payload) => ({
  type: 'REQUEST_ERROR',
  payload,
});

export const getCoins = () => (dispatch) => {
  dispatch(requestCoin());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((data) => dispatch(requestCoinsSucess(data)))
    .catch((error) => dispatch(requestCoinsError(error)));
};
