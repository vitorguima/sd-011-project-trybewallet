// Esse reducer será responsável por tratar as informações da pessoa usuária
export const SIGNIN = 'signin';

const INITIAL = {
  email: '',
  password: '',
};

const user = (state = INITIAL, action) => {
  switch (action.type) {
  case SIGNIN:
    return {
      email: action.email,
      password: action.password,
    }
  default:
    return state;
  }
};

export default user;
