import { LOGIN_USER } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function user(state = INITIAL_STATE, action) {
  if (action.type === LOGIN_USER) {
    return {
      ...state, email: action.payload,
    };
  }
  return state;
}

export default user;
