// Coloque aqui suas actions

export const REQUEST_COINS = 'REQUEST_COINS';
export const REQUEST_COINS_SUCCESS = 'REQUEST_COINS_SUCESS';
export const REQUEST_COINS_ERROR = 'REQUEST_COINS_ERROR';
export const LOGIN = 'LOGIN';

const login = (data) => ({
  type: 'LOGIN',
  data,
});

const requestCoins = (data) => ({
  type: REQUEST_COINS,
  data,
});

const requestCoinsucess = (data) => ({
  type: REQUEST_COINS_SUCCESS,
  data,
});

const requestCoinsError = (data) => ({
  type: requestCoinsError,
  data,
});
