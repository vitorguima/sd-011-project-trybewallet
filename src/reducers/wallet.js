const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'REQUEST_SUCESS':
    return {
      ...state,
      currencies: [...state.currencies, action.payload],
    };
  case 'REQUEST_ERROR':
    return {
      ...state,
    };
  default:
    return {
      state,
    };
  }
}

export default walletReducer;
