export function saveEmail(email) {
  return ({
    type: 'SAVE_EMAIL',
    email,
  });
}

export function spending(currencies, expenses) {
  return ({
    type: 'ADD_SPENT',
    currencies,
    expenses,
  });
}

export const deleteExpense = (id) => ({
  type: 'DEL_SPENT',
  id,
});
