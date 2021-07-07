import getCoins from '../services/CoinApi';

const sendEmail = (payload) => ({
  type: 'SEND_EMAIL',
  payload,
});

export default sendEmail;

export const requestCoin = (payload) => ({
  type: 'REQUEST_COIN',
  payload,
});

export const requestCoinsSucess = (payload) => ({
  type: 'REQUEST_SUCESS',
  payload,
});

export const requestCoinsError = (payload) => ({
  type: 'REQUEST_ERROR',
  payload,
});

export const fetchCoins = () => (dispatch) => {
  getCoins()
    .then(
      (coins) => dispatch(requestCoinsSucess(coins)),
      (error) => dispatch(requestCoinsError(error.message)),
    );
};
