// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  SUCESS_REQUEST,
  FAILED_REQUEST,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: '',
  spends: 0.00,
  exchange: 'BRL',
};

function getSpends(expenses) {
  return expenses.reduce((
    (acc, { value, currency, exchangeRates }) => (
      acc + (parseFloat(value) * exchangeRates[currency].ask)
    )), 0);
}

function wallet(state = INITIAL_STATE, { type, expense, currencies, error, id }) {
  switch (type) {
  case ADD_EXPENSE: {
    const expenses = [...state.expenses, expense];
    return { ...state, expenses, spends: getSpends(expenses) }; }
  case DELETE_EXPENSE: {
    const expenses = state.expenses.filter((exp) => exp.id !== id);
    return { ...state, expenses, spends: getSpends(expenses) }; }
  case SUCESS_REQUEST:
    return { ...state, currencies: [...state.currencies, currencies] };
  case FAILED_REQUEST:
    return { ...state, error };
  default:
    return state;
  }
}

export default wallet;
