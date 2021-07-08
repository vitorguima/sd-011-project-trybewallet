import { SET_WALLET } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialState, { type, payload }) => {
  switch (type) {
  case SET_WALLET:
    return { ...state, ...payload };

  default:
    return state;
  }
};
export default wallet;
