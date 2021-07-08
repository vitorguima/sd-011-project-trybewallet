const INITIAL_STATE = {
  currencies: {},
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'RECEIVE_COINS':
    delete action.coins.USDT;
    return {
      ...state,
      currencies: action.coins,
    };
  case 'ADD_EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...action.expense }],
    };
  case 'REMOVE_EXPENSE':
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== parseInt(action.expenseId, 10)),
    };
  default:
    return state;
  }
}

export default wallet;
