// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
    isLoading: false,
  },
};

function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      data: action.data,
    }
  default:
    return state;
  }
}

export default loginReducer;
