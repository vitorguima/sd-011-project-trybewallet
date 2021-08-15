import getCurrency from '../services/Index';

export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_EXPENSE = 'SUBMIT_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const SUBMIT_EDIT = 'SUBMIT_EDIT';
export const REQUEST_API = 'REQUEST_API';

export const submitLogin = (email, password) => ({
  type: SUBMIT_LOGIN,
  email,
  password,
  isLoggedIn: true,
});

export const requestAPI = () => ({
  type: REQUEST_API,
  loading: true,
});

export const submitExpense = (expense, currencies) => ({
  type: SUBMIT_EXPENSE,
  loading: false,
  ...expense,
  exchangeRates: currencies,
});

export const editExpense = (id) => ({
  type: EDIT_EXPENSE,
  idToEdit: id,
});

export const submitEdit = (editedExpenses) => ({
  type: SUBMIT_EDIT,
  editedExpenses,
});

export const deleteExpenses = (filteredExpenses) => ({
  type: DELETE_EXPENSE,
  filteredExpenses,
});

export const dispatchExpense = (expense) => async (dispatch) => {
  dispatch((requestAPI()));
  const currencies = await (getCurrency());
  return dispatch(submitExpense(expense, currencies));
};
