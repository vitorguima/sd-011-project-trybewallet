// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_API_SUCCESS, NEW_EXPENSE, DELETE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API_SUCCESS: {
    const allCurrencies = Object.keys(action.payload);
    const filteredCurrencyes = allCurrencies.filter((currency) => currency !== 'USDT');
    return {
      ...state,
      currencies: [...state.currencies, ...filteredCurrencyes],
    };
  }
  case NEW_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case DELETE_EXPENSE: {
    const newExpenses = state.expenses.filter((expense) => expense.id !== action.payload);
    return {
      ...state,
      expenses: newExpenses,
    };
  }
  default:
    return state;
  }
}

export default wallet;
