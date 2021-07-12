export const EXPENSE = 'EXPENSE';

export const newExpense = (expense, convertedValue) => ({
  type: EXPENSE,
  payload: { expense, convertedValue },
});
