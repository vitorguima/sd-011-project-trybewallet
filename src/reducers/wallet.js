import {
  SAVE_EXCHANGES_RATES,
  SAVE_EXPENSE_WALLET,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_EXCHANGES_RATES:
    return {
      ...state,
      exchangeRatesApi: action.payload,
    };
  case SAVE_EXPENSE_WALLET:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
}

export default walletReducer;
