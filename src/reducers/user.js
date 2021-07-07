const INITIAL_STATE = {
  email: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SEND_EMAIL':
    return {
      ...state,
      email: action.payload,
    };
  default:
    return {
      ...state,
    };
  }
}

export default userReducer;
