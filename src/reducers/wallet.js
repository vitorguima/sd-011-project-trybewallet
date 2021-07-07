const INITIAL_STATE = {
  currencies: 'BRL',
  expenses: 0,
};

export default function reducerUser(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_SPENT':
    return ({
      currencies: action.currencies,
      expenses: action.expenses,
    });
  default:
    return state;
  }
}
