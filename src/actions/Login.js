export const LOGIN_SUCESS = 'LOGIN_SUCESS';

const login = (payload) => ({
  type: LOGIN_SUCESS,
  payload,
});

export default login;
