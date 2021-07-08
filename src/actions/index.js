export const loginAction = (email) => ({ type: 'LOGIN_ACTION', email });

export const addExpense = (expense) => ({ type: 'ADD_EXPENSE', expense });

export const removeExpense = (expenseId) => ({ type: 'REMOVE_EXPENSE', expenseId });

const receiveCoins = (coins) => ({ type: 'RECEIVE_COINS', coins });

export const fetchCoins = () => (dispatch) => (fetch('https://economia.awesomeapi.com.br/json/all')
  .then((response) => response.json())
  .then((coins) => dispatch(receiveCoins(coins))));
