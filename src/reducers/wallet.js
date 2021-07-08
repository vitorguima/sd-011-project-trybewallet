const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'REQUEST_COIN':
    return {
      ...state,
      isLoading: true,
    };
  case 'REQUEST_COIN_SUCCESS':
    return {
      ...state,
      currencies: Object.keys(action.currencies).filter((key) => key !== 'USDT'),
    };
  case 'REQUEST_COIN_FAIL':
    return {
      ...state,
      isLoading: false,
    };
  default:
    return state;
  }
}

export default wallet;
