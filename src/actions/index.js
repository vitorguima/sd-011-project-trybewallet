export const REQUEST_COIN = 'REQUEST_COIN';
export const REQUEST_COIN_SUCCESS = 'REQUEST_COIN_SUCCESS';
export const REQUEST_COIN_FAIL = 'REQUEST_COIN_FAIL';
export const ADD_EXPENSES = 'ADD_EXPENSES';

function getEmail(email) {
  return {
    type: 'ADD_EMAIL',
    email,
  };
}

export default getEmail;

const requestCoin = () => ({
  type: REQUEST_COIN,
});

const requestCoinSuccess = (payload) => ({
  type: REQUEST_COIN_SUCCESS,
  payload,
});

const requestCoinFail = (payload) => ({
  type: REQUEST_COIN_FAIL,
  payload,
});

const addExpenses = (state, payload) => ({
  type: ADD_EXPENSES,
  state,
  payload,
});

export const fetchApi = (state = null) => (dispatch) => {
  dispatch(requestCoin());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((result) => result.json())
    .then((result) => dispatch(state
      ? addExpenses(state, result) : requestCoinSuccess(result)))
    .catch((error) => dispatch(requestCoinFail(error)));
};
