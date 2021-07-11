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
  case 'SAVE_CURRENCIES_STATE':
    return {
      ...state,
      currencies: [action.payload],
    };
  default:
    return { ...state, totalField: 0 };
  }
};

export default wallet;
