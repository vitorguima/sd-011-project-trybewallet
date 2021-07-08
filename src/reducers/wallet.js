// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// Mudar a função depois.
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function saveWallet(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case 'ADD_EMAIL':
    return {
      ...state,
      email: payload,
    };
  default:
    return state;
  }
}

export default saveWallet;
