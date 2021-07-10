import {
  REQUEST_CURRENCY,
  RECEIVE_CURRENCY,
  EXPENSES_ADD,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: null,
  id: 0,
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
    const keys = Object.keys(action.currencies);
    const keyFilter = keys.filter((key) => key !== 'USDT');
    return {
      ...state,
      currencies: state.currencies.concat(keyFilter),
      isLoading: false,
    };
  }
  case EXPENSES_ADD:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        { id: action.id,
          ...action.expense,
          exchangeRates: state.currencies,
        }],
      id: state.id + 1,
      isLoading: false,
    };
  default:
    return state;
  }
};

export default wallet;
