import { DATA_FAILURE, ADD_EXPENSE, REMOVE_EXPENSE, GET_CURRENCIES } from '../actions';
const initialState = { currencies: [], expenses: [], total: 0 };

const redx = (prev, curr) => {
  const { currency, value, exchangeRates } = curr;
  const { ask } = exchangeRates[currency];
  return prev + value * ask;
};

const walletReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case DATA_FAILURE: {
      return { ...state, payload };
    }
    case ADD_EXPENSE: {
      const { expenses } = state;
      const len = expenses.length;
      const newExpense = { ...payload, id: len };
      const updatedExpenses = [...state.expenses, newExpense];

      const total = updatedExpenses.reduce(redx, 0);
      return { ...state, expenses: updatedExpenses, total };
    }

    case GET_CURRENCIES: {
      return { ...state, currencies: payload };
    }

    case REMOVE_EXPENSE: {
      const updatedExpenses = [...payload.filter((el) => state.expenses.includes(el))];
      const total = updatedExpenses.reduce(redx, 0);
      // const newIndex = updatedExpenses.map((el, i) => ({ ...el, id: i }));
      return { ...state, expenses: updatedExpenses, total };
    }

    default:
      return { ...state };
  }
};

export default walletReducer;
