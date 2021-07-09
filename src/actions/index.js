// Coloque aqui suas actions
export const SET_LOGIN_EMAIL = 'SET_LOGIN_EMAIL';
export const SET_WALLET = 'SET_WALLET';

export const loginEmail = (payload) => ({
  type: SET_LOGIN_EMAIL,
  payload,
});

export const walletAction = (payload) => ({
  type: SET_WALLET,
  payload,
});
