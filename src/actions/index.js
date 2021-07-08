export const REQUEST_COIN = 'REQUEST_COIN';
export const REQUEST_COIN_SUCCESS = 'REQUEST_COIN_SUCCESS';
export const REQUEST_COIN_FAIL = 'REQUEST_COIN_FAIL';

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

export const fetchApi = () => (dispatch) => {
  dispatch(requestCoin());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((result) => result.json())
    .then((result) => dispatch(requestCoinSuccess(result)))
    .catch((error) => dispatch(requestCoinFail(error)));
};
