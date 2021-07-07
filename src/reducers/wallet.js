import { RECEIVE_CURRENCIES, REQUEST_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return {
      ...state,
      isLoading: true,
    };
  case RECEIVE_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
      isLoading: false,
    };
  default:
    return state;
  }
};

export default wallet;
