const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'LOGIN':
    return { state: action.state };
  default:
    return state;
  }
}

export default wallet;
