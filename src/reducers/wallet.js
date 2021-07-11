import {
  FETCH_CURENCIES_SUCCEEDED,
  FETCH_CURENCIES_FAILED,
  ADD_EXPENSE_FAILED,
  ADD_EXPENSE_SUCCEDED,
  REMOVE_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  key: 0,
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
      expenses: [...state.expenses, { id: state.key, ...action.payload }],
      key: state.key + 1,
    };
  }
  case ADD_EXPENSE_FAILED:
    return { ...state, error: action.payload };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses.filter((item) => item.id !== parseInt(action.payload, 10)),
      ],
    };
  default:
    return state;
  }
}

export default wallet;
