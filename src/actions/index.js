export const USER_LOGIN = 'USER_LOGIN';

export const userLoginAction = (email) => ({
  type: USER_LOGIN,
  payload: email,
});
