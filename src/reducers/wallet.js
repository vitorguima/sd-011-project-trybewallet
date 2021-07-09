const INITIAL_STATE = {
  currencies: {},
  expenses: [],
  editMode: false,
  editExpenseById: {},
};

function wallet(state = INITIAL_STATE, action) {
  const { expenses } = state;
  const newExpenseId = expenses.length > 0 ? expenses[expenses.length - 1].id + 1 : 0;
  switch (action.type) {
  case 'RECEIVE_COINS':
    delete action.coins.USDT;
    return {
      ...state,
      currencies: action.coins,
    };
  case 'ADD_EXPENSE':
    return {
      ...state,
      expenses: [...expenses, { id: newExpenseId, ...action.expense }],
    };
  case 'REMOVE_EXPENSE':
    return {
      ...state,
      expenses: expenses.filter(({ id }) => id !== parseInt(action.expenseId, 10)),
    };
  case 'GET_EXPENSE':
    return {
      ...state,
      editMode: true,
      editExpenseById: expenses.find(({ id }) => id === parseInt(action.expenseId, 10)),
    };
  case 'EDIT_EXPENSE':
    return {
      ...state,
      expenses: expenses.map((expense) => (
        expense.id === parseInt(action.changes.id, 10) ? action.changes : expense
      )),
      editMode: false,
      editExpenseById: {},
    };
  default:
    return state;
  }
}

export default wallet;
