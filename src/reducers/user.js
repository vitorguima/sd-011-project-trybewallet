import {
  ACTION_USER,
} from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ACTION_USER:
    return {
      email: action.payload,
    };
  default:
    return state;
  }
}

export default user;
