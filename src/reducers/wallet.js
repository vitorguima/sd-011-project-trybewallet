// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { RECEIVE_CURRENCY } from '../actions';

const GET_EXPENSES = {
  currencies: [],
  expenses: [],
};

const expenses = (state = GET_EXPENSES, action) => {
  switch (action.type) {
  case RECEIVE_CURRENCY:
    return { ...state, currencies: action.currency };
  default:
    return state;
  }
};

export default expenses;
