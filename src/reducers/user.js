const INITIAL_STATE = {
  user: {
    email: '',
  },
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'LOGIN_ACTION':
    return {
      ...state,
      user: { email: action.email },
    };
  default:
    return state;
  }
}

export default userReducer;
