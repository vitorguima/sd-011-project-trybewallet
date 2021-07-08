// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

export const ADD_EXPENSE = 'add-exp';
export const REM_EXPENSE = 'rem-exp';
export const EDT_EXPENSE = 'edt-exp';
export const CHANGE_EXPENSE = 'change-exp';
export const ADD_CURRENCIES = 'add-currency';

const INITIAL = {
  currencies: [],
  expenses: [],
  toEdit: '',
};

const wallet = (state = INITIAL, action) => {
  switch (action.type) {
  case ADD_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
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
  case EDT_EXPENSE:
    return {
      ...state,
      toEdit: action.payload,
    };
  case CHANGE_EXPENSE:
    return {
      ...state,
      expenses: [action.payload, ...state.expenses.filter(({ id }) => id !== action.id)],
    };
  default:
    return state;
  }
};

export default wallet;
