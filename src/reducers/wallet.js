const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function user(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
  case 'PLACEHOLDER':
    return {
      ...state,
      email: payload,
    };
  default:
    return state;
  }
}

export default user;
