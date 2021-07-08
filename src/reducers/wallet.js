const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  rates: {},
  editing: false,
  edit: {},
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'GET_CURRENCIES':
    return {
      ...state,
      currencies: Object.keys(action.payload),
      rates: action.payload,
    };
  case 'SEND_INFO':
    return {
      ...state,
      expenses: [...state.expenses, action.state],
    };
  case 'DELETE_EXPENSE':
    return {
      ...state,
      expenses: state.expenses.filter((item, index) => index !== action.payload),
    };
  case 'EDIT_EXPENSE':
    return {
      ...state,
      edit: state.expenses.find((item) => item.id === action.payload),
      editing: true,
    };
  case 'EDITING_EXPENSE':
    return {
      ...state,
      expenses: state.expenses.map((item) => {
        if (item.id === state.edit.id) {
          return {
            id: item.id,
            exchangeRates: item.exchangeRates,
            ...action.payload,
          };
        }
        return item;
      }),
      editing: false,
    };
  default:
    return state;
  }
};

export default wallet;
