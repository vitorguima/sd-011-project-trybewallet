// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const WALLET_INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

export default function updateWallet(state = WALLET_INITIAL_STATE, action) {
  switch (action.type) {
  default:
    return state;
  }
}
