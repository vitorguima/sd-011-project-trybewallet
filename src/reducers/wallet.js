// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  GET_CURRENCIES, REQUEST_CURRENCIES,
  FAILED_REQUEST, SET_EXPENSE,
} from '../actions';

const GLOBAL_WALLET_STATE = {
  currencies: [],
  expenses: [],
  totalExpense: 0,
  isFetching: false,
};

const wallet = (state = GLOBAL_WALLET_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state, isFetching: true };
  case GET_CURRENCIES:
    return { ...state, currencies: action.currencies, isFetching: false };
  case FAILED_REQUEST:
    return { error: action.currencies, isFetching: false };
  case SET_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.expense],
      totalExpense: state.totalExpense + Number.parseFloat(action.value),
    };
  default:
    return state;
  }
};

export default wallet;
