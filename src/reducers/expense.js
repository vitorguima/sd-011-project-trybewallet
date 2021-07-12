import { SEND_EXPENSE } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function expenseReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SEND_EXPENSE:
    return {
      ...state,
      expense: action.payload,
    };
  default:
    return state;
  }
}

export default expenseReducer;
