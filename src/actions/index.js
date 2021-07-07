const sendEmail = (payload) => ({
  type: 'SEND_EMAIL',
  payload,
});

export default sendEmail;

const requestCoinsSucess = (payload) => ({
  type: 'REQUEST_SUCESS',
  payload,
});

const requestCoinsError = (payload) => ({
  type: 'REQUEST_ERROR',
  payload,
});

export const fetchCoins = () => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((result) => result.json())
    .then((data) => dispatch(requestCoinsSucess(data)))
    .catch((error) => dispatch(requestCoinsError(error.message)));
};
