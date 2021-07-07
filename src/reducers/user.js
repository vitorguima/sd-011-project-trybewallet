const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (actioin.type) {
    case 'Login':
      return {
        ...state,
        users: { email: action.payload },
      };
    default:
      return state;
  }
};

export default userReducer;
