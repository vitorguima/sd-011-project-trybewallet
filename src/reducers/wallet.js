const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function user(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
  case 'REQUEST_WALLET_SUCCESS':
    return {
      ...state,
      currencies: payload,
    };
  default:
    return state;
  }
}

export default user;
