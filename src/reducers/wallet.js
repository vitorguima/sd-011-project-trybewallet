import { FETCH_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case FETCH_CURRENCIES:
    return {
      ...state,
      currencies: payload,
    };
  default:
    return state;
  }
};

export default wallet;
