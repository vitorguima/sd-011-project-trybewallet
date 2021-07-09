// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUEST_CURRENCY,
  REQUEST_CURRENCY_SUCCESS,
  REQUEST_CURRENCY_ERROR,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: null,
  isLoading: false,
};

const wallet = (state = INITIAL_STATE, action, payload) => {
  switch (action.type) {
  case REQUEST_CURRENCY:
    return {
      ...state,
      isLoading: true,
    };
  case REQUEST_CURRENCY_SUCCESS: {
    const keys = Object.keys(action.currencies);
    const keyFilter = keys.filter((key) => key !== 'USDT');
    return {
      ...state,
      currencies: state.currencies.concat(keyFilter),
      isLoading: false,
    };
  }
  case REQUEST_CURRENCY_ERROR:
    return {
      ...state,
      error: payload.error,
      isLoading: false,
    };
  default:
    return state;
  }
};

export default wallet;
