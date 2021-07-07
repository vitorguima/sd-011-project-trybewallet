const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const USER_LOGIN = 'USER_LOGIN';

export default function UserLogin(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER_LOGIN:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
}
