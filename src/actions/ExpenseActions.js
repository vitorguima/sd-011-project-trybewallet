export const EXPENSE = 'EXPENSE';

export const newExpense = (expense) => ({
  type: EXPENSE,
  payload: expense,
});
