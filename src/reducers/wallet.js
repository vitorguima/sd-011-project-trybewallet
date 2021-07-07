// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL, action) => {
  switch (action.type) {
  case '1':
    return;
  case '2':
    return;
  default:
    return state;
  }
};

export default wallet;
