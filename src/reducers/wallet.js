// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
  error: '',
  index: 0,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'REQUEST_CURR':
    return { ...state, isFetching: true };
  case 'NEW_EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, { ...action.state, exchangeRates: action.payload }],
      isFetching: false,
      index: state.index + 1,
    };
  case 'FAILED_REQUEST':
    return { ...state, error: action.payload, isFetching: false };
  case 'DELETE_EXPENSE':
    return { ...state, expenses: state.expenses.filter(({ id }) => id !== action.state) };
  default:
    return state;
  }
}

export default wallet;
