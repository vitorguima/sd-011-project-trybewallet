// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SET_EMAIL } from '../actions';

const GLOBAL_STATE = {
  email: '',
};

const user = (state = GLOBAL_STATE, action) => {
  switch (action.type) {
  case SET_EMAIL:
    return { email: action.email };
  default:
    return state;
  }
};

export default user;
