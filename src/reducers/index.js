const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'value':
    return { ...state };
  default:
    return state;
  }
}

export default reducer;
