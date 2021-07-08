// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SET_LOGIN_EMAIL } from '../actions';

const INITIAL_STATE = {};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_LOGIN_EMAIL:
    return { ...state, email: action.payload };
  default:
    return state;
  }
}

export default userReducer;
