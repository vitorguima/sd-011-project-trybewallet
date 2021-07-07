// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
  password: '',
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'LOGIN_INPUT':
    return {
      ...state, [action.name]: action.value,
    };
  default:
    return state;
  }
}
