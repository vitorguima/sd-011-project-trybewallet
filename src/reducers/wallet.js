// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  GET_CURRENCIES, REQUEST_CURRENCIES,
  FAILED_REQUEST, SET_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE, SET_EDITED_EXPENSE,
} from '../actions';

const GLOBAL_WALLET_STATE = {
  currencies: [],
  expenses: [],
  totalExpense: 0,
  isFetching: false,
  editing: false,
  editExpense: false,
};

const wallet = (state = GLOBAL_WALLET_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state, isFetching: true };
  case GET_CURRENCIES:
    return { ...state, currencies: action.currencies, isFetching: false };
  case FAILED_REQUEST:
    return { error: action.currencies, isFetching: false };
  case SET_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.expense],
      totalExpense: state.totalExpense + Number.parseFloat(action.value),
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses.slice(0, state.expenses.indexOf(action.expense)),
        ...state.expenses.slice(state.expenses.indexOf(action.expense) + 1),
      ],
      totalExpense: state.totalExpense - Number.parseFloat(action.expense.value),
    };
  case EDIT_EXPENSE:
    console.log(action);
    return {
      ...state,
      editing: action.editing,
      editExpense: action.editExpense,
    };
  case SET_EDITED_EXPENSE: {
    const editedValue = Number.parseFloat(action.editedExpense.value);
    const previousValue = Number.parseFloat(action.expense.value);
    const sumOfValues = editedValue - previousValue;
    return {
      ...state,
      expenses: [
        ...state.expenses.slice(0, state.expenses.indexOf(action.expense)),
        action.editedExpense,
        ...state.expenses.slice(state.expenses.indexOf(action.expense) + 1),
      ],
      totalExpense: state.totalExpense + sumOfValues,
      editing: action.editing,
    };
  }
  default:
    return state;
  }
};

export default wallet;
