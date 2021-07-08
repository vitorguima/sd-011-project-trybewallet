import { ADD_EXPENSE, REQUEST_DATA, REQUEST_DATA_SUCCESS, DELET_DATA } from '../actions';

const INITIAL_STATE = {
  currencies: {},
  expenses: [],
  loading: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case REQUEST_DATA:
    return { ...state, loading: true };
  case REQUEST_DATA_SUCCESS:
    return { ...state, currencies: action.payload };
  case DELET_DATA:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload) };
  default:
    return state;
  }
};

export default wallet;
