const INITIAL_STATE = {
  email: '',
  senha: '',
};

export default function reducerUser(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'INPUT_USER':
    return ({
      email: action.email,
      senha: action.senha,
    });
  default:
    return state;
  }
}
