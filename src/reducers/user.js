import { LOGIN } from '../actions/actionTypes';

const INITIAL_STATE = {
  email: '',
  login: false
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        email: action.email,
      };
    default:
      return state;
  }
}
