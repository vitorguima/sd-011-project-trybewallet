// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  user: {
    email: '',
  },
};

export default function userReducer(state = INITIAL_STATE, action) {
  if (action.type === 'USER_LOGIN') {
    return {
      user: {
        // implemente o email no state
      },
    };
  }
  return state;
}
