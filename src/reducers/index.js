import { combineReducers } from 'redux';
import { GET_USER_EMAIL, INITIAL_STATE } from '../actions';

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_USER_EMAIL:
    return { ...state, user: { email: action.email } };
  default:
    return state;
  }
}

const rootReducer = combineReducers({ userReducer });

export default rootReducer;
