import {
  GET_CURRENCY_WALLET_ACTION,
  GET_CURRENCY_WALLET_ACTION_ERROR,
  SEND_INFOS_TO_EXPENSES_ACTION,
} from '../actions';

const INITIAL_STATE = {
  totalValue: '0',
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
  {
    const { currency } = action.payload;
    const exchange = action.payload.exchangeRates[currency].ask;
    return {
      ...state,
      totalValue:
      (Number(state.totalValue) + Number(action.payload.value) * exchange).toFixed(2),
      expenses: [...state.expenses, action.payload],
    };
  }

  default:
    return state;
  }
}

export default wallet;
