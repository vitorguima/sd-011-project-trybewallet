import createReducer from '../utils/createReducer';

const initialState = {
  currencies: [],
  expenses: [],
};

const actions = {
  addNewExpense: (nextState, expense) => {
    nextState.expenses.push(expense);
    return nextState;
  },
  receiveCurrencies: (nextState, currencies) => {
    nextState.currencies = currencies;
    return nextState;
  },
};

export default createReducer(initialState, actions);
