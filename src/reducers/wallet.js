import {
  REQUEST_CURRENCIES,
  REQUEST_SUCCESS,
  ADD_EXPENSE,
} from '../actions/wallet';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  //  isLoading: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return {
      ...state,
      //  isLoading: true,
    };
  case REQUEST_SUCCESS:
    return {
      ...state,
      currencies: action.currencies,
      //  isLoading: false,
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
  default:
    return state;
  }
};

export default wallet;
