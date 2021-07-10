// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {} from '../actions';

const WALLET_STATE = {
  currencies: [],
  expenses: [],
};

function functionWallet(state = WALLET_STATE, action) {
  switch (action.type) {
  default:
    return state;
  }
}

export default functionWallet;
