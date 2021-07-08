// Coloque aqui suas actions

const LOGIN = 'LOGIN';

const signUp = (email) => ({
  type: LOGIN,
  payload: {
    email,
  },
});

export default signUp;
