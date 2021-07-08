const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export const wallet = (state = INITIAL_STATE, { type, payload }) => {
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
