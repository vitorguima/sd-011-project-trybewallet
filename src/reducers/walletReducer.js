// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  default:
    console.log(payload);
    return state;
  }
}

export default walletReducer;
