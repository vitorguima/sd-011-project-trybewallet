import {
  ACTION_CURRENCIES,
  ACTION_EXPENSES,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ACTION_CURRENCIES:
    console.log('action_curre', state.currencies);
    return {
      ...state,
      currencies: parseFloat(action.payload),
    };
  case ACTION_EXPENSES:
    console.log('action_expe', state.expenses);
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
}

export default wallet;
