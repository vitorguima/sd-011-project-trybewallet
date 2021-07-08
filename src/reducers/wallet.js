// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export default function wallet(state = INITIAL_STATE, action) {
  if (action.type === 'ADD_WALLET') {
    return {
      wallet: {
        // implemente o wallet no state
      },
    };
  }
  return state;
}
