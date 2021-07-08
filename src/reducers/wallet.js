// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  ADD_EXPENSE,
  SUCESS_REQUEST,
  FAILED_REQUEST,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: '',
};

function wallet(state = INITIAL_STATE, { type, expense, currencies, error }) {
  switch (type) {
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, expense] };
  case SUCESS_REQUEST:
    return { ...state, currencies: [...state.currencies, currencies] };
  case FAILED_REQUEST:
    return { ...state, error };
  default:
    return state;
  }
}

export default wallet;
