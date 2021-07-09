import {
  REQUEST_CURRENCIES,
  REQUEST_SUCCESS,
  ADD_EXPENSE,
  DELETE_EXPENSE,
} from '../actions/wallet';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
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
      currencies: action.currencies,
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
  default:
    return state;
  }
};

export default wallet;
