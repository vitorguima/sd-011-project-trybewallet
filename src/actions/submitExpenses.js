export const SUBMIT_EXPENSES = 'SUBMIT_EXPENSES';

export const submitActionExpenses = (state, exchange) => ({
  type: SUBMIT_EXPENSES,
  state,
  exchange,
});
