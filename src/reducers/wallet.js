// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INICIAL_STATE = {
  currencies: [],
  expenses: [],
};

export default function walletReducer(state = INICIAL_STATE, action) {
  switch (action.type) {
  case 'SET_EMAIL':
    return {
      email: action.payload.email,
    };
  default:
    return state;
  }
}
