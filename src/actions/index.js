export const SAVE_EMAIL = 'SAVE_EMAIL';
export const AUTH_TO_LOGIN = 'AUTH_TO_LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const CALCULATE_EXPENSES = 'CALCULATE_EXPENSES';
export const SAVE_CURRENCY = 'SAVE_CURRENCY';

export const saveEmail = (payload) => ({
  type: SAVE_EMAIL,
  payload,
});

export const authToLogin = (payload) => ({
  type: AUTH_TO_LOGIN,
  payload,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const calculateExpenses = (payload) => ({
  type: CALCULATE_EXPENSES,
  payload,
});

export const saveCurrency = (payload) => ({
  type: SAVE_CURRENCY,
  payload,
});
