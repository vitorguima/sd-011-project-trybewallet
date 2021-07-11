// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
  },
  dunha: 'Quem é o dunha?',
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'DUNHA':
    return { ...state, dunha: 'Aquele que rasgou seu cu com a unha' };
  case 'LOGIN_EMAIL':
    return {
      ...state,
      user: { email: action.email },
    };
  default:
    return state;
  }
}
