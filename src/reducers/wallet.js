import { GET_DATA, DATA_FAILURE, REQUEST_DATA, ADD_EXPENSE } from '../actions';
const initialState = { currencies: [], expenses: [] };

const walletReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_DATA: {
      return { ...state, currencies: payload };
    }

    case DATA_FAILURE: {
      return { ...state, payload };
    }
    case ADD_EXPENSE: {
      const len = state.expenses.length;
      const newExpense = { ...payload, id: len };
      return { ...state, expenses: [...state.expenses, newExpense] };
    }
    default:
      return { ...state };
  }
};

export default walletReducer;
