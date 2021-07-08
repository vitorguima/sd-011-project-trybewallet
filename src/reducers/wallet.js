// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUEST_COIN,
  REQUEST_COIN_SUCESS,
  REQUEST_COIN_FAIL,
  PAYMENT_SUCESS,
  DELETE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
};

export default function reducerWallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_COIN:
    return {
      ...state,
      loading: true,
    };
  case REQUEST_COIN_SUCESS:
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((coin) => coin !== 'USDT'),
      loading: false,
    };
  case REQUEST_COIN_FAIL:
    return {
      ...state,
      loading: false,
    };
  case PAYMENT_SUCESS:
    action.state.exchangeRates = action.payload;
    return {
      ...state,
      expenses: [...state.expenses, action.state],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((id) => id.id !== action.payload),
    };
  default:
    return state;
  }
}
