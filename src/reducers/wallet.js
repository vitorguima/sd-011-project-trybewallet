// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { RECEIVE_CURRENCIES, REQUEST_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  load: true,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state, load: false };
  case RECEIVE_CURRENCIES:
    return { ...state, currencies: action.currencies };
  default:
    return state;
  }
};

export default wallet;
