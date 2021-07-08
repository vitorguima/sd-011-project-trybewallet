import { LOGIN_USER } from '../actions';

const INITIAL_STATE = {
  email: '',
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
