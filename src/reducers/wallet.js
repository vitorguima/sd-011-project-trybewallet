// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { REQUEST_API,
  REQUEST_API_SUCCESS,
  REQUEST_API_ERROR,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  EDIT_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: '',
  // currentExpense: '',
  expenses: [],
  idCounter: 0,
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      isLoading: true,
    };
  case REQUEST_API_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
      isLoading: false,
    };
  case REQUEST_API_ERROR:
    return {
      ...state,
      error: action.payload,
      isLoading: false,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, {
        ...action.payload,
        id: state.idCounter,
        exchangeRates: state.currencies,
      }],
      isLoading: false,
      idCounter: state.idCounter + 1,
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses.filter((exp) => exp !== action.payload)],
    };
  case EDIT_EXPENSE:
    console.log(action.payload);
    return state;
  default:
    return state;
  }
}

export default walletReducer;
