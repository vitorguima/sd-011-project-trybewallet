import { SEND_EMAIL } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
};

function userReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case SEND_EMAIL:
    return {
      email: payload.email,
    };
  default:
    return state;
  }
}

export default userReducer;
