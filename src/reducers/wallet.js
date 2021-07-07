// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'FETCH_MOEDAS':
    return {
      ...state,
      loading: true,
    };
  case 'FETCH_SUCESS':
    return {
      ...state,
      currencies: action.payload,
      loading: false,
    };
  case 'FETCH_ERROR':
    return {
      ...state,
      loading: false,
    };
  case 'MOUNT_EXPENSES':
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
}

export default wallet;
