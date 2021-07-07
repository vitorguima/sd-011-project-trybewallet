// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'nomeDaAction':
    return { ...state, wallet: action.payload };
  default:
    return state;
  }
}

export default wallet;
