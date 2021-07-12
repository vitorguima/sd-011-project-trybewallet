import { REQUEST_API,
  REQUEST_API_SUCCESS,
  REQUEST_API_ERROR,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  EDIT_EXPENSE,
  OPEN_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: '',
  isEditingExpense: false,
  expenses: [],
  idCounter: 0,
};

function walletReducer(state = INITIAL_STATE, action) {
  const { payload, type } = action;
  switch (type) {
  case REQUEST_API:
    return { ...state, isLoading: true };
  case REQUEST_API_SUCCESS:
    return { ...state, currencies: payload, isLoading: false };
  case REQUEST_API_ERROR:
    return { ...state, error: payload, isLoading: false };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, {
        ...payload,
        id: state.idCounter,
        exchangeRates: state.currencies,
      }],
      isLoading: false,
      idCounter: state.idCounter + 1,
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses.filter((exp) => exp !== payload)],
    };
  case OPEN_EXPENSE:
    return { ...state, isEditingExpense: true };
  case EDIT_EXPENSE:
    return {
      ...state,
      expenses: state.expenses
        .reduce((arr, exp) => (
          exp.id !== payload.id ? arr.concat(exp) : arr.concat(payload)), []),
      isEditingExpense: false,
    };
  default:
    return state;
  }
}

export default walletReducer;
