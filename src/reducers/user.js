// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
    logged: false,
  },
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'LOGIN':
    return { email: action.payload.email,
      password: action.payload.password,
      logged: true };
  default:
    return state;
  }
};

export default user;
