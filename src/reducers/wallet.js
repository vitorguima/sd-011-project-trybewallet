import {
  FETCH_CURENCIES_SUCCEEDED,
  FETCH_CURENCIES_FAILED,
  ADD_EXPENSE_FAILED,
  ADD_EXPENSE_SUCCEDED,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_CURENCIES_SUCCEEDED:
    return { ...state, currencies: action.payload };
  case FETCH_CURENCIES_FAILED:
    return { ...state, error: action.payload };
  case ADD_EXPENSE_SUCCEDED: {
    return {
      ...state,
      expenses: [...state.expenses, { ...action.payload, id: state.expenses.length }],
    };
  }
  case ADD_EXPENSE_FAILED:
    return { ...state, error: action.payload };
  default:
    return state;
  }
}

export default wallet;
