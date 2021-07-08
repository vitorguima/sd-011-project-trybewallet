import { FETCH_CURRENCY_QUOTE_SUCESS } from '../actions/fetchCurrencyQuote';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_CURRENCY_QUOTE_SUCESS:
    return {
      ...state,
      expenses: state.expenses.concat({
        ...action.payload.form,
        id: state.expenses.length,
      }),
    };
  default:
    return state;
  }
}

export default walletReducer;
