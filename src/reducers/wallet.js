import { FETCH_STARTED, FETCH_SUCCESS, FETCH_ERROR } from '../actions';

const initialState = {
  loading: false,
  currencies: [],
  expenses: [],
  error: null,
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case FETCH_STARTED:
    return { ...state, loading: true };
  case FETCH_SUCCESS:
    return { ...state, currencies: action.payload, loading: false };
  case FETCH_ERROR:
    return { ...state, currencies: null, loading: false, error: action.payload };
  default:
    return state;
  }
}
export default wallet;
