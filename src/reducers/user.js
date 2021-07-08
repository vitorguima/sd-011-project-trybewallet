const INITIAL_STATE = {
  user: {
    email: '',
  },
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'value':
    return { ...state };
  default:
    return state;
  }
}

export default userReducer;
