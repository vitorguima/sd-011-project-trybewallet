export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';

export const submitLogin = (email, password) => ({
  type: SUBMIT_LOGIN,
  email,
  password,
  isLoggedIn: true,
});
