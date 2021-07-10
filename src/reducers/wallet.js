import {
  REQUEST_CURRENCY,
  RECEIVE_CURRENCY,
  EXPENSES_ADD,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: null,
  isLoading: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCY:
    return {
      ...state,
      isLoading: true,
    };
  case RECEIVE_CURRENCY: {
    return {
      ...state,
      currencies: action.currencies,
      isLoading: false,
    };
  }
  case EXPENSES_ADD:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          ...action.expense,
          exchangeRates: state.currencies,
        }],
      isLoading: false,
    };
  default:
    return state;
  }
};

export default wallet;
