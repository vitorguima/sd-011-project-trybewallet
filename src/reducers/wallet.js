// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SET_USER_EMAIL } from '../actions/Login';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action = {}) {
  if (action.type === SET_USER_EMAIL) {
    return ({
      ...state,
      currencies: [], // action.payload,
      expenses: [], // action.payload,
    });
  }
  return state;
}

export default wallet;
