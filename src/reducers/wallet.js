import { REQUEST_API, GET_DATA, EXPENSE_WALLET, DELETE_EXPENSES } from '../actions';

const INITIAL_STATE_WALLET = {
  currencies: [],
  expenses: [],
};

export default function walletVerification(state = INITIAL_STATE_WALLET, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
    };
  case GET_DATA:
    return {
      ...state,
      currencies: [action.data],
    };
  case EXPENSE_WALLET:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  case DELETE_EXPENSES:
    return {
      ...state,
      expenses: state.expenses.filter((a) => a.id !== action.expense),
    };
  default:
    return { ...state, totalfield: 0 };
  }
}
