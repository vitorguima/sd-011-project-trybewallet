const INITIAL_STATE = {
  email: '',
};

const User = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'USER_EMAIL':
    return state;
  default:
    return state;
  }
};

export default User;
