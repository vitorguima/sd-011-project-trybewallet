import { ADD_EXPENSE, REMOVE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE: {
    const { expenses } = state;
    const { length } = expenses;
    action.payload.id = length === 0 ? 0 : expenses[length - 1].id + 1;

    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.payload,
      ],
    };
  }
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => action.id !== id),
    };
  default:
    return state;
  }
};

export default wallet;
