// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
  disabled: true,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'USER_ACTION':
    return { ...state };
  default:
    return { ...state };
  }
};

export default userReducer;
