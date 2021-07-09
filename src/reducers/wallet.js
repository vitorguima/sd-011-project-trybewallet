import { ADD_EXPENSE, CALCULATE_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalCalculed: 0,
};

const walletReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, payload],
    };
  case CALCULATE_EXPENSES:
    return {
      ...state,
      totalCalculed: Number(state.totalCalculed) + Number(payload),
    };
  default:
    return state;
  }
};

export default walletReducer;
