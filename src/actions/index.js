// Coloque aqui suas actions
const USER_ACTION = 'USER_ACTION';
const WALLET_ACTION = 'WALLET_ACTION';

export const userAction = (param) => ({
  type: USER_ACTION,
  payload: param,
});

export const walletAction = (param) => ({
  WALLET_ACTION,
  payload: param,
});
