import {
  REQUEST_COIN,
  REQUEST_COIN_SUCCESS,
  REQUEST_COIN_FAIL,
  ADD_EXPENSES,
  DELETE_EXPENSES,
  EDIT_EXPENSES,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_COIN:
    return {
      ...state,
      isLoading: true,
    };
  case REQUEST_COIN_SUCCESS:
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((key) => key !== 'USDT'),
    };
  case REQUEST_COIN_FAIL:
    return {
      ...state,
      isLoading: false,
    };
  case ADD_EXPENSES:
    action.state.exchangeRates = action.payload;
    return {
      ...state,
      expenses: [...state.expenses, action.state],
    };
  case DELETE_EXPENSES:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => action.payload !== id),
    };
    case EDIT_EXPENSES:
      return {
        ...state,
        expenses: state.expenses.filter(({ id }) => action.payload !== id),
      };
  default:
    return state;
  }
}

export default wallet;
