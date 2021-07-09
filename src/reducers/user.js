// Esse reducer será responsável por tratar as informações da pessoa usuária

import { LOGIN } from '../actions/LoginActions';

const INITIAL_STATE = {
  email: '',
  password: '',
  isLoged: false,
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password,
      isLoged: true,
    };
  default:
    return {
      ...state,
    };
  }
}
