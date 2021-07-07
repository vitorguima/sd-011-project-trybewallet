// Esse reducer será responsável por tratar as informações da pessoa usuária
import { CREATE_USER } from '../actions/index';

const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CREATE_USER:
    return { ...state, email: action.email };
  default:
    return state;
  }
};

export default user;
