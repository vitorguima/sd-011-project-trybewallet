const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ACTION_1':
    return '';
  default:
    return state;
  }
}

export default wallet;
