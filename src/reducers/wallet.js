const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'RECEIVE_COINS':
    return {
      ...state,
      expenses: Object.values(action.coins).filter(({ codein }) => codein !== 'BRLT'),
    };
  default:
    return state;
  }
}

export default wallet;
