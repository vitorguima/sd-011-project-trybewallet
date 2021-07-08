// Esse reducer será responsável por tratar as informações da pessoa usuária

import { SET_USER } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: { email: action.payload }
      }
    default:
      return state;
  }
}

export default userReducer;
