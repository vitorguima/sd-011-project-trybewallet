// Esse reducer será responsável por tratar as informações da pessoa usuária
const INICIAL_STATE = {
  email: '',
};

export default function userReducer(state = INICIAL_STATE, action) {
  switch (action.type) {
  case 'SET_EMAIL':
    return {
      email: action.payload.email,
    };
  default:
    return state;
  }
}
