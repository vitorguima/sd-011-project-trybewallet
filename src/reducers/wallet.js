// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUESTED_DATA, RECEIVED_DATA } from '../actions/index';

const WALLET_INITIAL_STATE = {
  isLoading: false,
  currencies: [],
  expenses: [],
};

export default function wallet(state = WALLET_INITIAL_STATE, action) {
  switch (action.type) {
  case REQUESTED_DATA:
    return {
      isLoading: true,
    };
  case RECEIVED_DATA:
    return {
      isLoading: false,
      currencies: [...state, Object.keys(action.currency)],
    };
  default:
    return state;
  }
}
