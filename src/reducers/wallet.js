// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'CURRENCIES':
    return [...state, action.currencies];
  case 'EXPENSES':
    return [...state, action.expenses];
  default:
    return state;
  }
}

export default wallet;
