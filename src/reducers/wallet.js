// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  GET_CURRENCIES, REQUEST_CURRENCIES,
  FAILED_REQUEST, SET_EXPENSE, REMOVE_EXPENSE,
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
  case REMOVE_EXPENSE:
    console.log({
      ...state,
      expenses: [
        ...state.expenses.slice(0, action.expense.id),
        ...state.expenses.slice(action.expense.id + 1),
      ],
    });
    return {
      ...state,
      expenses: [
        ...state.expenses.slice(0, state.expenses.indexOf(action.expense)),
        ...state.expenses.slice(state.expenses.indexOf(action.expense) + 1),
      ],
      totalExpense: state.totalExpense - Number.parseFloat(action.expense.value),
    };
  default:
    return state;
  }
};

export default wallet;
