const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const FETCH_API = 'FETCH-API';
const DISPATCH_EXPENSE = 'DISPATACH_EXPENSE';

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_API:
    return {
      ...state,
      currencies: action.fetchApi,
    };
  case DISPATCH_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.concat(action.expense),
    };
  default:
    return state;
  }
}

export default wallet;
