// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SPEND_WALLET } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export default function wallet(state = INITIAL_STATE, action) {
  if (action.type === SPEND_WALLET) {
    return {
      ...state,
      currencies: action.payload,
    };
  }
  return state;
}
