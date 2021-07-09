// Esse reducer será responsável por tratar as informações da pessoa usuária
import { STORE_EMAIL } from '../actions';

const USER_INITIAL_STATE = {
  email: '',
};

export default function user(state = USER_INITIAL_STATE, action) {
  switch (action.type) {
  case STORE_EMAIL:
    return { ...state, email: action.email };
  default:
    return state;
  }
}
