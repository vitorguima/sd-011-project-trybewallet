// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_CURRENCY, ADD_EXPENSE, REMOVE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case ADD_CURRENCY:
    return { ...state, currencies: payload };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, payload] };
  case REMOVE_EXPENSE:
    return { ...state, expenses: state.expenses.filter((e) => e.id !== payload) };
  default:
    return state;
  }
};

export default wallet;
