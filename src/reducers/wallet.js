const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const Wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'CURRENCIES_EXPENSES':
    return state;
  default:
    return state;
  }
};

export default Wallet;
