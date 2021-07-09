// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  exchange: null,
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
      currencies: Object.keys(action.payload).filter((code) => code !== 'USDT'),
      exchange: action.payload,
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
  case 'RMV_EXPENSE':
    return {
      ...state,
      expenses: state.expenses.filter((exps, i) => i !== action.index),
    };
  case 'GET_FORM':
    return {
      ...state,
      formFuction: action.payload,
    };
  case 'UPDT_FORM':
    return {
      ...state,
      expenses: state.expenses.map((exp) => {
        if (exp.id === action.payload.id) {
          return {
            id: exp.id,
            ...action.payload,
            exchangeRates: exp.exchangeRates,
          };
        } return exp;
      }),
    };
  default:
    return state;
  }
}

// expenses: [...state.expenses.filter((exps, i) => i !== action.index), action.payload]

export default wallet;
