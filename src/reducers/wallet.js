// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUESTING_COINS,
  RECEIVE_COINS,
  RECEIVE_EXPENSE_DATA,
  REMOVE_EXPENSE,
} from '../actions';

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
      requestingData: false,
      expenses: [
        ...state.expenses,
        { ...action.payload.expenseEntries,
          exchangeRates: { ...action.payload.data },
        },
      ],
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((curr) => curr.id !== action.id),
    };
  default:
    return state;
  }
};

export default wallet;
