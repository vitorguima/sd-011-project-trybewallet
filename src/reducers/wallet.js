// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { RECEIVE_QUOTE_API } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case RECEIVE_QUOTE_API:
    return {
      ...state,
      currencies: action.quote,
    };
  default:
    return state;
  }
}

export default wallet;
