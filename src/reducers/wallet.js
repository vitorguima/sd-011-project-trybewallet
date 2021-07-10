export const SET_CURRENCIES = 'SET_CURRENCIES';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case SET_CURRENCIES:
    return {
      ...state,
      currencies: payload,
    };
  default:
    return state;
  }
};

export default wallet;
