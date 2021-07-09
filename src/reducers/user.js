import { LOGIN } from '../actions';

const INITIAL_STATE = {
  user: { email: '' },
  disabled: true,
};

const patterns = {
  email: /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  password: /^[\w@-]{6,20}$/,
};

const validate = ((field, regex) => regex.test(field.value));

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      user: { email: action.payload.value },
      disabled: !validate(action.payload, patterns.email),
    };
  default:
    return state;
  }
};

export default user;
