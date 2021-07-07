export function userAction(email) {
  return ({
    type: 'INPUT_USER',
    email,
  });
}

export function totalSpentAction(currencies, expenses) {
  return ({
    type: 'ADD_SPENT',
    currencies,
    expenses,
  });
}
