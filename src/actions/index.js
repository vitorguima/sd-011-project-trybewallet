export const loginAction = (email) => ({ type: 'LOGIN_ACTION', email });

export const addExpense = (expense) => ({ type: 'ADD_EXPENSE', expense });

const requestCoins = () => ({ type: 'REQUEST_COINS' });

const receiveCoins = (coins) => ({ type: 'RECEIVE_COINS', coins });

export const fetchCoins = () => (dispatch) => {
  dispatch(requestCoins());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((coins) => dispatch(receiveCoins(coins)));
};
