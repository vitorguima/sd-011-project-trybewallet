// Coloque aqui suas actions

export const REQUEST_COINS = 'REQUEST_COINS';
export const REQUEST_COINS_SUCCESS = 'REQUEST_COINS_SUCESS';
export const REQUEST_COINS_ERROR = 'REQUEST_COINS_ERROR';
export const SAVE_LOGIN = 'SAVE_LOGIN';

export const saveLogin = (email) => ({
  type: SAVE_LOGIN,
  email,
});

export const requestCoins = (data) => ({
  type: REQUEST_COINS,
  data,
});

export const requestCoinsucess = (data) => ({
  type: REQUEST_COINS_SUCCESS,
  data,
});

export const requestCoinsError = (data) => ({
  type: requestCoinsError,
  data,
});
