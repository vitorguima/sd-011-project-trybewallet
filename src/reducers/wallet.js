import { REQUEST_CURRENCIES, RECEIVED_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  currencies: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state, isLoading: true };
  case RECEIVED_CURRENCIES:
    return { ...state, isLoading: false, currencies: action.payload };

  default:
    return state;
  }
};

export default wallet;
