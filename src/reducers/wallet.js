// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: BRL,
  expenses: 0,
};

function userWallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_SPENT':
    return ({
      currencies: action.currencies,
      expenses: action.expenses,
    });
  default:
    return state;
  }
}

export default userWallet;
