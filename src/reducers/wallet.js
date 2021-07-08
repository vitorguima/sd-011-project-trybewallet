import { REQUEST_API, GET_DATA, EXPENSE_WALLET } from '../actions';

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
  default:
    return { ...state, totalfield: 0 };
  }
}
