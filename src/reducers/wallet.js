import {
  GET_CURRENCY_WALLET_ACTION,
  GET_CURRENCY_WALLET_ACTION_ERROR,
  SEND_INFOS_TO_EXPENSES_ACTION,
  ERASE_DISPENSE_ACTION,
} from '../actions';

const INITIAL_STATE = {
  currency: 'BRL',
  currencyList: [],
  error: '',
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCY_WALLET_ACTION:
    return {
      ...state,
      currencyList: action.payload,
    };
  case GET_CURRENCY_WALLET_ACTION_ERROR:
    return {
      ...state,
      error: action.payload,
    };
  case SEND_INFOS_TO_EXPENSES_ACTION:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };

  case ERASE_DISPENSE_ACTION:
    return {
      ...state,
      expenses: state.expenses.filter((item, index) => index !== action.index),
    };

  default:
    return state;
  }
}

export default wallet;
