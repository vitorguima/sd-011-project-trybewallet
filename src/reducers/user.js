import { SUBMIT_LOGIN } from '../actions/index';

const INITIAL_STATE = {
  email: '',
  password: '',
  isLoggedIn: false,
};

function user(state = INITIAL_STATE, { type, email, password, isLoggedIn }) {
  switch (type) {
  case SUBMIT_LOGIN:
    return {
      ...state,
      email,
      password,
      isLoggedIn,
    };
  default:
    return state;
  }
}

export default user;
