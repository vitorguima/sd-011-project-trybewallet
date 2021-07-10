const INITIAL_STATE = {
  email: '',
};

function userLogin(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SAVE_EMAIL':
    return ({
      email: action.email,
    });
  default:
    return state;
  }
}
export default userLogin;
