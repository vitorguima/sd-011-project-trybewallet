// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const GET_EXPENSES = {
  currencies: [],
  expenses: [],
};

const expenses = (state = GET_EXPENSES, action) => {
  switch (action.type) {
  case 'WALLET':
    return { ...state };
  default:
    return state;
  }
};

export default expenses;
