// Esse reducer será responsável por tratar as informações da pessoa usuária
import { userEmail } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case userEmail:
    return { ...state, email: action.payload };
  default:
    return state;
  }
}

export default user;
