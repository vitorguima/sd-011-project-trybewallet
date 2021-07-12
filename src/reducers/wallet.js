const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const user = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case 'FETCH_CURRENCIES':
    return {
      ...state,
      currencies: payload,
    };
  default:
    return state;
  }
};

export default user;
