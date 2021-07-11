// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
  },
  dunha: 'rasga seu cu com a unha',
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'LOGIN':
    return { ...state };
  default:
    return state;
  }
}
