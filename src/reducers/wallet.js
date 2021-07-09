// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { REQUEST_API, REQUEST_API_SUCCESS, REQUEST_API_ERROR } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      isLoading: true,
    };
  case REQUEST_API_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
      isLoading: false,
    };
  case REQUEST_API_ERROR:
    return {
      ...state,
      error: action.payload,
      isLoading: false,
    };
  default:
    return state;
  }
}

export default walletReducer;
