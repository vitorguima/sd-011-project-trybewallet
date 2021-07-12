/* eslint-disable max-len */
/* eslint-disable max-statements */
import { DATA_FAILURE,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  GET_CURRENCIES,
  UPDATE_EXPENSE } from '../actions';

const initialState = { currencies: [], expenses: [], total: 0 };

const redx = (prev, curr) => {
  const { currency, value, exchangeRates } = curr;
  const { ask } = exchangeRates[currency];
  return prev + value * ask;
};

const walletReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case DATA_FAILURE: {
    return { ...state, payload };
  }
  case ADD_EXPENSE: {
    const { expenses } = state;
    const len = expenses.length;
    const newExpense = { ...payload, id: len };
    const updatedExpenses = [...state.expenses, newExpense];
    const total = updatedExpenses.reduce(redx, 0);
    return { ...state, expenses: updatedExpenses, total };
  }
  case UPDATE_EXPENSE: {
    console.log(payload);
    const replacedExpense = state.expenses.map((el) => (el.id !== payload.id ? el : payload));
    const newExpense = [...replacedExpense];
    const total = newExpense.reduce(redx, 0);
    return { ...state, expenses: newExpense, total };
    // return { ...state };
  }

  case GET_CURRENCIES: {
    return { ...state, currencies: payload };
  }

  case REMOVE_EXPENSE: {
    const updatedExpenses = [...payload.filter((el) => state.expenses.includes(el))];
    const total = updatedExpenses.reduce(redx, 0);
    return { ...state, expenses: updatedExpenses, total };
  }

  default:
    return { ...state };
  }
};

export default walletReducer;
