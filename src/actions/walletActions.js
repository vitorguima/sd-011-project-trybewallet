import { getCurrentCoins } from '../services/awesomeApi';

export const REQUEST_COINS_SUCESS = 'REQUEST_COINS_SUCESS';
export const REQUEST_COINS_ERROR = 'REQUEST_COINS_ERROR';

export const requestCoinsSucess = (coins) => ({
  type: REQUEST_COINS_SUCESS,
  payload: {
    coins,
  },
});

export const requestCoinsError = (error) => ({
  type: REQUEST_COINS_ERROR,
  payload: {
    error,
  },
});

export const fetchAwesomeApi = () => (dispatch) => {
  getCurrentCoins()
    .then((coins) => {
      const denaro = Object.keys(coins);
      const newCoins = denaro.filter((coin) => coin !== 'USDT');
      dispatch(
        requestCoinsSucess(newCoins),
      );
    })
    .catch((error) => dispatch(
      requestCoinsError(error),
    ));
};
