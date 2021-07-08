// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SET_EMAIL } from '../actions';

const GLOBAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const user = (state = GLOBAL_STATE, action) => {
  switch (action.type) {
  case SET_EMAIL:
    return { ...state, user: { email: action.email } };
  default:
    return state;
  }
};

export default user;
