import { DATA_FAILURE, ADD_EXPENSE, REMOVE_EXPENSE } from '../actions';
const initialState = { currencies: [], expenses: [] };

const walletReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case DATA_FAILURE: {
      return { ...state, payload };
    }
    case ADD_EXPENSE: {
      const len = state.expenses.length;
      const newExpense = { ...payload, id: len };
      return { ...state, expenses: [...state.expenses, newExpense] };
    }

    case REMOVE_EXPENSE: {
      const newObj = [];
      payload.forEach((el, index) => {
        newObj[index] = { ...el, id: index };
      });
      return { ...state, expenses: newObj };
    }
    default:
      return { ...state };
  }
};

export default walletReducer;
