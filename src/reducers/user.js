import { USER_EMAIL } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
};

export default function user(state = INITIAL_STATE, action) {
  if (action.type === USER_EMAIL) {
    return {
      ...state,
      email: action.email,
    };
  }
  return state;
}
