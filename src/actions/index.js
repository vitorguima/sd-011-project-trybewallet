// Coloque aqui suas actions
const LOGIN = 'LOGIN';

const email = (credentials) => ({
  type: LOGIN,
  payload: credentials,
});

export default email;
