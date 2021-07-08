const INITIAL_STATE = {
  total: null,
  loading: true,
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'LOADING_FETCH':
    return { ...state, loading: true };
  case 'ACCEPT_FETCH':
    return { ...state,
      loading: false,
      currencies: Object.keys(action.payload).filter((coin) => coin !== 'USDT') };
  default:
    return state;
  }
};

export default wallet;
