export const CREATE_USER = 'CREATE_USER';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const ENABLE_EDIT_MODE = 'ENABLE_EDIT_MODE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';

export const saveEmail = (email) => ({
  type: CREATE_USER,
  payload: email,
});

export const saveCurrencies = (currencies) => ({
  type: SAVE_CURRENCIES,
  payload: currencies,
});

export const saveExpense = (expenses) => ({
  type: SAVE_EXPENSES,
  payload: expenses,
});

export function actionDeleteExpense(id) {
  return {
    type: DELETE_EXPENSE,
    payload: id,
  };
}

export function actionEnableEditExpense(id) {
  return {
    type: ENABLE_EDIT_MODE,
    payload: id,
  };
}

export function actionEditExpense(id) {
  return {
    type: EDIT_EXPENSE,
    payload: id,
  };
}
