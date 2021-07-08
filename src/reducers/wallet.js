// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_COINS_SUCESS, REQUEST_COINS_ERROR } from '../actions/walletActions';

const INICIAL_STATE = {
  currencies: [],
  expenses: [],
};

export default function walletReducer(state = INICIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_COINS_SUCESS:
    return {
      ...state,
      currencies: action.payload.coins,
    };
  case REQUEST_COINS_ERROR:
    return {
      ...state,
      error: action.payload.error,
    };
  default:
    return state;
  }
}
