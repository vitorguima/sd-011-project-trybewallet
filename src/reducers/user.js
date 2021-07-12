// Esse reducer será responsável por tratar as informações da pessoa usuária
import { CHANGE_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: 'alguem@alguem.com',
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CHANGE_EMAIL:
    return {
      ...state, email: action.payload,
    };
  default:
    return state;
  }
}
