import {
  RECEIVE_CURRENCIES,
  REQUEST_CURRENCIES,
  RECEIVE_EXPENSE,
  REMOVE_EXPENSE,
  START_EDIT_EXPENSE,
  EDIT_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
  id: 0,
  edit: false,
  currentExpense: {},
};

const wallet = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case REQUEST_CURRENCIES:
    return { ...state, isLoading: true };
  case RECEIVE_CURRENCIES:
    return { ...state, currencies: payload, isLoading: false };
  case RECEIVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, { ...payload, id: state.id }],
      id: state.id + 1,
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== payload),
    };
  case START_EDIT_EXPENSE:
    return {
      ...state,
      edit: true,
      id: payload,
      currentExpense: state.expenses[payload],
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      edit: false,
      currentExpense: {},
      expenses: state.expenses.map((expense) => {
        if (expense.id === payload.id) {
          return payload;
        }
        return expense;
      }),
    };
  default:
    return state;
  }
};

export default wallet;
