const INITIAL_STATE = {
  currencies: 'BRL',
  total: 0,
  expenses: [],
};

const wallet = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case 'WALLET':
    return {
      ...state,
      ...payload,
    };
  default:
    return state;
  }
};

export default wallet;
