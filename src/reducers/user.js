const INITIAL_STATE = {
  email: '',
};

const SUBMITLOGIN = 'SUBMIT-LOGIN';

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SUBMITLOGIN:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
}

export default user;
