// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'WALLET_ADD':
    return {
      wallet: {
        currencies: action.currencies,
        expenses: action.expenses,
      },
    };
  case 'WALLET_SUB':
    return {
      wallet: {
        ...state,
        currencies: action.currencies,
        expenses: state.expenses - action.expenses,
      },
    };
  default:
    return state;
  }
};

export default user;
