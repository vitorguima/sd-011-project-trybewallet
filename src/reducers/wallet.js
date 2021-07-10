// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  RECEIVE_CURRENCIES,
  REQUEST_CURRENCIES,
  ADD_EXPENSE,
  REM_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  load: true,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state, load: false };
  case RECEIVE_CURRENCIES:
    return { ...state, currencies: action.currencies };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.expenses] };
  case REM_EXPENSE:
    return { ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.id) };
  default:
    return state;
  }
};

export default wallet;
