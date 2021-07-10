import {
  GET_CURRENCY_WALLET_ACTION,
  GET_CURRENCY_WALLET_ACTION_ERROR,
} from '../actions';

const INITIAL_STATE = {
  totalValue: 0,
  currency: 'BRL',
  currencyList: [],
  error: '',
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

  default:
    return state;
  }
}

export default wallet;
