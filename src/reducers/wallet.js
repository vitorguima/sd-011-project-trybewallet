import { GET_CURRENCIES, GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_FAILED, ADD_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case GET_CURRENCIES:
    return { ...state };
  case GET_CURRENCIES_SUCCESS:
    return { ...state, currencies: action.payload };
  case GET_CURRENCIES_FAILED:
    return { ...state, error: action.payload };
  default:
    return state;
  }
}

export default wallet;
