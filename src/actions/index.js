export const ACTION_USER = 'ACTION_USER';
export const ACTION_CURRENCIES = 'ACTION_CURRENCIES';
export const ACTION_EXPENSES = 'ACTION_EXPENSES';

export const loginEmail = (payload) => ({
  type: ACTION_USER,
  payload,
});

export const walletCurrencies = (payload) => ({
  type: ACTION_CURRENCIES,
  payload,
});

export const walletExpenses = (payload) => ({
  type: ACTION_EXPENSES,
  payload,
});
