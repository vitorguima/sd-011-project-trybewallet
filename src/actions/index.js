export const CREATE_USER_EMAIL = 'CREATE_USER_EMAIL';
export const SEND_COIN = 'SEND_COIN';

export const userEmail = (payload) => ({
  type: CREATE_USER_EMAIL,
  payload,
});

export const walletAction = (payload) => ({
  type: SEND_COIN,
  payload,
});
