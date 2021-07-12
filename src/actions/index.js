// Coloque aqui suas actions

export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const saveEmail = (email) => ({
  type: CHANGE_EMAIL,
  payload: email,
});

export const addExpenses = (expenses) => ({
  type: ADD_EXPENSES,
  payload: expenses,
});

// export default {
//   CHANGE_EMAIL,
//   saveEmail,
// };
