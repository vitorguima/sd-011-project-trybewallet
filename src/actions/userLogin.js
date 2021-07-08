export const REQUEST_LOGIN = 'REQUEST_LOGIN';

export const requestLogin = (email) => ({
  type: REQUEST_LOGIN,
  email,
});
