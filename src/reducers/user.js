// Esse reducer será responsável por tratar as informações da pessoa usuária
import {
  LOGIN_USER,
} from '../actions';

const INITIAL_STATE = {
  email: '',
  isLogged: false,
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN_USER:
    return { isLogged: true, email: action.payload };
  default:
    return state;
  }
}

export default user;
