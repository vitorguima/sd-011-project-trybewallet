// Coloque aqui suas actions
export const REQUEST_COIN = 'REQUEST_COIN';
export const REQUEST_COIN_SUCCESS = 'REQUEST_COIN_SUCCESS';
export const REQUEST_COIN_ERROR = 'REQUEST_COIN_ERROR';

function SendEmail(state) {
  return {
    type: 'ADD_EMAIL',
    email: state,
  };
}

export default SendEmail;

const requestCoin = () => ({
  type: REQUEST_COIN,
});

const requestCoinSuccess = (payload) => ({
  type: REQUEST_COIN_SUCCESS,
  payload,
});

const requestCoinError = (payload) => ({
  type: REQUEST_COIN_ERROR,
  payload,
});

export const fetchCoin = () => (dispatch) => {
  dispatch(requestCoin());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((result) => result.json())
    .then((data) => dispatch(requestCoinSuccess(data)))
    .catch((error) => dispatch(requestCoinError(error)));
};
