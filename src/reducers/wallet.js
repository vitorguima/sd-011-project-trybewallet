// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {
  currencies: [],
  expenses: [0],
};

export default function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'expense':
    return {
      ...state,
      expenses: 1,
    };
  default:
    return {
      ...state,
    };
  }
}
