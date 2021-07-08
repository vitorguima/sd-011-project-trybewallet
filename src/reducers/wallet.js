// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUEST_COIN,
  REQUEST_COIN_SUCCESS,
  REQUEST_COIN_ERROR,
  RESPONSE_PARAM_SUCCESS,
  REMOVE_DESCRIPTION,
  FUNC_EDIT_EXPENSES,
  UPDATE_EDIT_EXPENSES,
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
    };
  case RESPONSE_PARAM_SUCCESS:
    action.state.exchangeRates = action.payload;
    return {
      ...state,
      expenses: [...state.expenses, action.state],
    };
  case REMOVE_DESCRIPTION:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.payload),
    };
  case FUNC_EDIT_EXPENSES:
    return {
      ...state,
      keepFuncEdit: action.payload,
    };
  case UPDATE_EDIT_EXPENSES:
    return {
      ...state,
      expenses: state.expenses.map((value) => {
        if (value.id === action.payload.id) {
          return {
            id: value.id,
            ...action.payload,
            exchangeRates: value.exchangeRates,
          };
        } return value;
      }),
    };
  default:
    return state;
  }
}

export default wallet;
