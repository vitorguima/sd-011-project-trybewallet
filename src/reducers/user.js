import { LOG_USER } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case LOG_USER:
    return {
      email: payload,
    };
  default:
    return state;
  }
};

export default user;
