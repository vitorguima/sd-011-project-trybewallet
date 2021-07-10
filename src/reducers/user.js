import { SET_USERNAME, SET_PASSWORD } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_USERNAME:
    return { ...state, email: action.payload };
  case SET_PASSWORD:
    return { ...state, password: action.payload };
  default:
    return state;
  }
}

export default userReducer;
