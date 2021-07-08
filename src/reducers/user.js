import { CREATE_USER_EMAIL } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};// Esse reducer será responsável por tratar as informações da pessoa usuária

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CREATE_USER_EMAIL:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
}

export default user;
