import { REQUEST_SUCCESS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_SUCCESS:
    return { ...state, currencies: [...Object.keys(action.currencies)] };
  default:
    return state;
  }
}

export default wallet;
