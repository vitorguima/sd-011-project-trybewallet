// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIES, REQUEST_CURRENCIES, FAILED_REQUEST } from '../actions';

const GLOBAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const wallet = (state = GLOBAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state, isFetching: true };
  case GET_CURRENCIES:
    return { ...state, currencies: action.currencies, isFetching: false };
  case FAILED_REQUEST:
    return { ...state, error: action.currencies, isFetching: false };
  default:
    return state;
  }
};

export default wallet;
