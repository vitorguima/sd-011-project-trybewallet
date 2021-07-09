import createReducer from '../utils/createReducer';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const ACTIONS = {
  ADD_NEW_EXPENSE: (state, expense) => {
    state.expenses.push(expense);
    return state;
  },
  RECEIVE_CURRENCIES: (state, currencies) => {
    state.currencies = currencies;
    return state;
  },
};

export default createReducer(INITIAL_STATE, ACTIONS);
