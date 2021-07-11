import { REQUEST_CURRENCIES, RECEIVED_CURRENCIES, ADD_EXPENSE } from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  currencies: {},
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state, isLoading: true };
  case RECEIVED_CURRENCIES:
    console.log('teste')
    return { ...state, isLoading: false, currencies: action.payload };
  // case ADD_EXPENSE:
  //   return { ...state, expenses: [action.payload] };

  default:
    return state;
  }
};

export default wallet;
