// Esse reducer será responsável por tratar as informações da pessoa usuária

import { SET_USER } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function setUser(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_USER:
    return {
      ...state,
      email: action.payload,
      password: action.payload,
    };
  default:
    return state;
  }
}

export default setUser;
