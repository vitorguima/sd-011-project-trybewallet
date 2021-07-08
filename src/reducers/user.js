import { SET_FORM } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export const user = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case SET_FORM:
    return {
      ...state,
      email: payload.email,
      password: payload.password,
    };
  default:
    return state;
  }
};

export default user;
