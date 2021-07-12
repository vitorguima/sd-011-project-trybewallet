// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { EXPENSE } from '../actions/ExpenseActions';

const INITIAL_STATE = {
  id: 0,
  currencies: [],
  expenses: [],
};

export default function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case EXPENSE:
    return {
      ...state,
      id: state.id + 1,
      expenses: [...state.expenses, action.payload.expense],
    };
  default:
    return {
      ...state,
    };
  }
}
