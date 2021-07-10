// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// wallet: {
//   currencies: [],
//   expenses: [],
// }
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalField: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SUM_EXPENSES':
    return {
      ...state,
      expenses: wallet.expenses + action.value,
    };
  default:
    return { ...state, totalField: 0 };
  }
};

export default wallet;