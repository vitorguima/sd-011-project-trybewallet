import { REQUEST_CURRENCY_API_SUCCESS } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case REQUEST_CURRENCY_API_SUCCESS:
    return {
      ...state,
      currencies: (payload.currencys).filter((currency) => currency !== 'USDT'),
    };
  default:
    console.log(payload);
    return state;
  }
}

export default walletReducer;
