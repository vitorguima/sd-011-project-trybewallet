import { GET_CURRENCY, GET_CURRENCY_SUCCESS, GET_CURRENCY_FAILED } from '../actions';

const INITIAL_STATE = {
  currencies: {},
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCY:
    return {
      ...state,
    };
  case GET_CURRENCY_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
    };
  case GET_CURRENCY_FAILED:
    return {
      ...state,
      error: action.payload,
    };
  default:
    return state;
  }
}

export default walletReducer;
