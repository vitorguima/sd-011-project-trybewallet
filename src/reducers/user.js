import { SET_USER_EMAIL } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
export { SET_USER_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, { type, email }) {
  switch (type) {
  case SET_USER_EMAIL:
    return { ...state, email };
  default:
    return state;
  }
}

export default user;
