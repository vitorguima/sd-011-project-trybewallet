import { LOGIN } from '../actions';

const INITIAL_STATE = {
  login: false,
};

function wasLogged(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN:
    return { login: true };
  default:
    return state;
  }
}

export default wasLogged;
