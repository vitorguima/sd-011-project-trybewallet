import { REQUESTING_COINS, RECEIVE_COINS, RECEIVE_EXPENSE_DATA } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  coins: [],
  requestingData: false,
};
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUESTING_COINS:
    return { ...state, requestingData: true };
  case RECEIVE_COINS:
    return { ...state, coins: [...action.coins], requestingData: false };
  case RECEIVE_EXPENSE_DATA:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        { ...action.payload.expenseEntries,
          exchangeRates: { ...action.payload.data },
        },
      ],
    };
  default:
    return state;
  }
};
export default wallet;
