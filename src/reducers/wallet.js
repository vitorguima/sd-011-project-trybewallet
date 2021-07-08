// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_COIN, REQUEST_COIN_SUCESS, REQUEST_COIN_FAIL } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
};

export default function reducerWallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_COIN:
    return {
      ...state,
      loading: true,
    };
  case REQUEST_COIN_SUCESS:
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((coin) => coin !== 'USDT'),
      loading: false,
    };
  case REQUEST_COIN_FAIL:
    return {
      ...state,
      loading: false,
    };
  default:
    return state;
  }
}
