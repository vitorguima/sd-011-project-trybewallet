const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SEND_EMAIL':
    return {
      ...state,
      user: { ...state.user, email: action.payload },
    };
  default:
    return state;
  }
};

export default user;
