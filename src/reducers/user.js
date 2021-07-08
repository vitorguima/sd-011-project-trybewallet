import { SET_FORM } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case SET_FORM:
    return { email: payload };
  default:
    return state;
  }
};

export default user;
