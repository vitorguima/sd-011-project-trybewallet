import { TESTE_CURRENCIES, TESTE_EXPENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case TESTE_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case TESTE_EXPENCIES:
    return {
      ...state,
      expenses: action.payload,
    };
  default:
    return state;
  }
}

export default walletReducer;
