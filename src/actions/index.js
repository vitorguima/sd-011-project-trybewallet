export const USER_INFO = 'USER_INFO';
export const CURRENCIES_VALUES = 'CURRENCIES_VALUES';
export const EXPENSES_VALUES = 'EXPENSES_VALUES';

export const userInfo = (email) => ({
  type: USER_INFO,
  payload: { email },
});

export const currenciesValues = (payload) => ({
  type: CURRENCIES_VALUES,
  payload,
});

export const expensesValues = (payload) => ({
  type: EXPENSES_VALUES,
  payload,
});
