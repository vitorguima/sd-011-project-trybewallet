// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};// Esse reducer será responsável por tratar as informações da pessoa usuária

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'LOGIN':
    return { state: action.state };
  default:
    return state;
  }
}

export default wallet;
