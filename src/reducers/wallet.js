// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  // EXPENSES,
  ADD_EXPENSES,
  REQUEST_API,
  REQUEST_API_SUCCESS,
  REQUEST_API_ERROR } from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: true,
  id: 0,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      isLoading: true,
    };
  case REQUEST_API_SUCCESS:
    return {
      ...state,
      currencies: action.value,
      isLoading: false,
    };
  case REQUEST_API_ERROR:
    return {
      ...state,
      error: action.value,
      isLoading: false,
    };
  case ADD_EXPENSES:
    return {
      ...state,
      id: state.id + 1,
      expenses: [...state.expenses,
        { id: action.id,
          ...action.expenses,
          exchangeRates: state.currencies,
        }],
    };
  default:
    return state;
  }
}

export default wallet;
