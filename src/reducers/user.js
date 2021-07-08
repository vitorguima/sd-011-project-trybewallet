// Esse reducer será responsável por tratar as informações da pessoa usuária

import { LOGIN_SUCESS } from '../actions/Login';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

function user(state = INITIAL_STATE, action) {
  if (LOGIN_SUCESS) {
    return {
      ...state,
      user: { email: action.payload },
    };
  }
  return state;
}

export default user;
