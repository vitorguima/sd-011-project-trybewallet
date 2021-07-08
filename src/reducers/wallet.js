// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

export const ADD_EXPENSE = 'add-exp';

const INITIAL = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    console.log(action);
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case '2':
    return;
  default:
    return state;
  }
};

export default wallet;
