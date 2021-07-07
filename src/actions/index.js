export const SAVE_EMAIL = 'SAVE_EMAIL';
export const AUTH_TO_LOGIN = 'AUTH_TO_LOGIN';

export const saveEmail = (payload) => ({
  type: SAVE_EMAIL,
  payload,
});

export const authToLogin = (payload) => ({
  type: AUTH_TO_LOGIN,
  payload,
});
