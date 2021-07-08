const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'value':
    return { ...state };
  default:
    return state;
  }
}

export default walletReducer;
