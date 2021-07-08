import {
  GET_API,
  FAILED_REQUEST,
  REQUEST_API,
  SAVE_EXPENSE,
  DELETE_EXPENSE,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: {},
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return { ...state, loading: true };
  case FAILED_REQUEST:
    return { ...state, error: action.error, loading: false };
  case GET_API:
    return { ...state, currencies: action.json, loading: false };
  case SAVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.expense],
      loading: false,
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter(
        (expense) => action.expense !== expense.id,
      ),
    };
  default:
    return state;
  }
};

export default wallet;
