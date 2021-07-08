const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const FETCH_API = 'FETCH-API';

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_API:
    return {
      ...state,
      currencies: action.fetchApi,
    };
  default:
    return state;
  }
}

export default wallet;
