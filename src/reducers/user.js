import { USER_LOGIN } from '../actions/loginActions';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER_LOGIN:
    return {
      email: action.email,
    };
  default:
    return state;
  }
}

export default user;
