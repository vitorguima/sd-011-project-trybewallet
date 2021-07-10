const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
  case 'REQUEST_WALLET_SUCCESS':
    return {
      ...state,
      currencies: payload,
    };
  case 'SAVE_EXPENSES':
  return {
    ...state,
    expenses: [...state.expenses, payload],
  };
  default:
    return state;
  }
}

export default wallet;
