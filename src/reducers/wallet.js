const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'GET_CURRENCIES':
    return {
      ...state,
      currencies: action.payload,
    };
  case 'TESTE_EXPENCIES':
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
}

export default walletReducer;
