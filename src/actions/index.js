// Coloque aqui suas actions
const LOGIN = 'LOGIN';

export const email = (credentials) => ({
  type: LOGIN,
  payload: credentials,
});
