// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUEST_COIN,
  REQUEST_COIN_SUCCESS,
  REQUEST_COIN_ERROR,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_COIN:
    return {
      ...state,
      isLoading: true,
    };
  case REQUEST_COIN_SUCCESS:
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((coin) => coin !== 'USDT'),
      isLoading: false,
    };
  case REQUEST_COIN_ERROR:
    return {
      ...state,
      isLoading: false,
    };
  default:
    return state;
  }
}

export default wallet;
