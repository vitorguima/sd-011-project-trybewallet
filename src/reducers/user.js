// Esse reducer será responsável por tratar as informações da pessoa usuária
const EMAIL = 'EMAIL';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

export default function reducerUser(state = INITIAL_STATE, action) {
  switch (action.type) {
  case EMAIL:
    return { ...state, email: action.email };
  default:
    return state;
  }
}
