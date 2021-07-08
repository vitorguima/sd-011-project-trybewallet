// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUEST_API,
  CURRENCIES,
  EXPENSES,
  DELETE,
  EDIT_BOOL,
  EDIT_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  isLoading: true,
  currencies: [],
  expenses: [],
  isEditing: false,
  toEdit: {},
  teste: {},
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      isLoading: true,
    };
  case CURRENCIES:
    return {
      ...state,
      isLoading: false,
      currencies: action.currencies,
    };
  case EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses,
        { ...action.expenses, exchangeRates: state.currencies }],
    };
  case DELETE:
    return {
      ...state,
      expenses: state.expenses.filter((e) => e !== action.delete),
    };
  case EDIT_BOOL:
    return {
      ...state,
      isEditing: true,
      toEdit: action.edit,
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      expenses: state.expenses
        .map((e) => (e.id === state.toEdit.id
          ? { id: e.id, ...action.edit, exchangeRates: e.exchangeRates }
          : e)),
      isEditing: false,
      teste: action.edit,
    };
  default:
    return state;
  }
}

export default walletReducer;
