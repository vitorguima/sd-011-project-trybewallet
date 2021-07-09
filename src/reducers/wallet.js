import {
  REQUEST_CURRENCIES,
  REQUEST_SUCCESS,
  ADD_EXPENSE,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
} from '../actions/wallet';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  enableEdit: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return {
      ...state,
    };
  case REQUEST_SUCCESS:
    return {
      ...state,
      currencies: Object.keys(action.currencies),
    };
  case ADD_EXPENSE: {
    const newExpense = {
      id: state.expenses.length,
      value: action.state.value,
      description: action.state.description,
      currency: action.state.currency,
      method: action.state.method,
      tag: action.state.tag,
      exchangeRates: action.updateCurrencies.currencies,
    };
    return {
      ...state,
      expenses: [...state.expenses, newExpense],
    };
  }
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.expense.id),
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      enableEdit: true,
    };
  default:
    return state;
  }
};

export default wallet;
