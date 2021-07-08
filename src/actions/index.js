const LOGIN = 'LOGIN';

const setLogin = (email) => ({
  type: LOGIN,
  payload: email,
});

export default setLogin;
