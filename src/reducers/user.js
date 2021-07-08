// Esse reducer será responsável por tratar as informações da pessoa usuária

const INICIAL_STATE = {
  user: {
    email: '',
    password: '',
    login: false,
  },
};

const user = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case 'LOGIN':
    return {
      ...state,
      Login: true,
    };
  default:
    return state;
  }
};

export default user;
