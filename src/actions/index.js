// Coloque aqui suas actions
const LOGIN = 'LOGIN';

const login = (email, password) => {
  return {
    type: LOGIN,
    email,
    password };
};

export default login;
