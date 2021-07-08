import { FETCH_CURENCIES_SUCCEEDED, FETCH_CURENCIES_FAILED } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_CURENCIES_SUCCEEDED:
    return { ...state, currencies: action.payload };
  case FETCH_CURENCIES_FAILED:
    return { ...state, error: action.payload };
  default:
    return state;
  }
}

export default wallet;
