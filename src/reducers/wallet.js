const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'REQUEST_COIN':
    return {
      ...state,
      isLoading: true,
    };
  case 'REQUEST_SUCESS':
    return {
      ...state,
      currencies: [...state.currencies, action.payload],
    };
  case 'REQUEST_ERROR':
    return {
      ...state,
      isLoading: false,
    };
  default:
    return {
      ...state,
    };
  }
}

export default walletReducer;
