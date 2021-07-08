// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_API, CURRENCIES, EXPENSES } from '../actions';

const INITIAL_STATE = {
  isLoading: true,
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      isLoading: true,
    };
  case CURRENCIES:
    return {
      ...state,
      isLoading: false,
      currencies: action.currencies,
    };
  case EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses,
        { ...action.expenses, exchangeRates: state.currencies }],
    };
  default:
    return state;
  }
}

export default walletReducer;
