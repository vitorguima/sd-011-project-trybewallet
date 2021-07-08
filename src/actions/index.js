// Coloque aqui suas actions
export const CREATE_USER = 'CREATE_USER';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';
export const SAVE_EXPENSES = 'SAVE_EXPENSEs';

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
