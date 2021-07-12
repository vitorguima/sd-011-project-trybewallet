// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUEST_API,
  RECEIVE_CURRENCIES,
  ADD_EXPENSE,
  DELETE_EXPENSE,
  // EDIT_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return { ...state };
  case RECEIVE_CURRENCIES:
    return { ...state, currencies: action.payload };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload),
    };
  // case EDIT_EXPENSE:
  //   return {
  //     ...state,
  //     expenses: [],
  //   };
  default:
    return state;
  }
}

export default walletReducer;
