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
      isLoading: false,
      currencies: Object.keys(action.payload).filter((coin) => coin !== 'USDT'),
    };
  case 'REQUEST_ERROR':
    return {
      ...state,
      isLoading: false,
    };
  case 'ADD_DETAILS':
    action.state.exchangeRates = action.payload;
    return {
      ...state,
      expenses: [...state.expenses, action.state],
    };
  default:
    return {
      ...state,
    };
  }
}

export default walletReducer;
