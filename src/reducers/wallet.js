// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INICIAL_STATE = {
  wallet: '',
};

function walletReducer(state = INICIAL_STATE, action) {
  switch (action.type) {
  case 'WALLET_IN':
    return [...state, action.data];
  default:
    return state;
  }
}

export default walletReducer;
