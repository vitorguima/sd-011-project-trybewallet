export const USER_LOGIN = 'USER_LOGIN';

export const loginAction = (email, password) => ({
  type: USER_LOGIN,
  payload: { email, password },
});
