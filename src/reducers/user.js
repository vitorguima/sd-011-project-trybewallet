// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
  dispesasTotais: 0,
  currencies: 'BRL',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'LOGIN':
    return {
      ...state,
      email: action.inputEmail,
    };

  case 'Wallet':
    return {
      ...state,
      email: action.inputEmail,
      dispesasTotais: action.valorTotal,
    };
  default:
    return state;
  }
}
export default user;
