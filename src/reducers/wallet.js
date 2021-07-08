// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const WALLET_INITIAL_STATE = {
  wallet: {
    isLoading: false,
    currencies: [],
    expenses: [],
  },
};

export default function updateCurrency(state = WALLET_INITIAL_STATE, action) {
  switch (action.type) {
  case 'REQUESTED_DATA':
    return {
      isLoading: true,
    };
  case 'RECEIVED_DATA':
    return {
      isLoading: false,
      currencies: [...state, action.currency],
    };
  default:
    return state;
  }
}
