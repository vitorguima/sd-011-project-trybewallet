// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

export const ADD_EXPENSE = 'add-exp';
export const REM_EXPENSE = 'rem-exp';

const INITIAL = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case REM_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.reduce((acc, cur, index) => {
        if (index === action.payload) return acc;
        return acc.concat(cur);
      }, []),
    };
  default:
    return state;
  }
};

export default wallet;
