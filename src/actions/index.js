// Coloque aqui suas actions
const USER_ACTION = 'USER_ACTION';
const WALLET_ACTION = 'WALLET_ACTION';

export const userAction = (payload) => ({
  type: USER_ACTION,
  payload,
});

export const walletAction = (payload) => ({
  WALLET_ACTION,
  payload,
});
