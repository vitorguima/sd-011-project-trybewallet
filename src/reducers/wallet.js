import {
  FETCH_STARTED,
  FETCH_SUCCESS,
  FETCH_ERROR,
  ADD_TO_EXPENSES,
} from '../actions';

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
  case ADD_TO_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
}

export default wallet;
