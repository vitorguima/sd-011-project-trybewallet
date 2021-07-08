// Esse reducer será responsável por tratar as informações da pessoa usuária

import { SET_USER_EMAIL } from '../actions/Login';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action = {}) {
  if (action.type === SET_USER_EMAIL) {
    return ({
      ...state,
      email: action.payload,
    });
  }
  return state;
}

export default user;
