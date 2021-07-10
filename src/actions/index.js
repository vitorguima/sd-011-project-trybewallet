import fetchApi from '../services/CurrencyApi';

const LOGIN_ENTER_CLICK_ACTION = 'LOGIN_ENTER_CLICK_ACTION';
const GET_CURRENCY_WALLET_ACTION = 'GET_CURRENCY_WALLET_ACTION';
const GET_CURRENCY_WALLET_ACTION_ERROR = 'GET_CURRENCY_WALLET_ACTION_ERROR';

function loginEnterClickAction(payload) {
  return {
    type: LOGIN_ENTER_CLICK_ACTION,
    payload,
  };
}

function getCurrencyAction(payload) {
  return {
    type: GET_CURRENCY_WALLET_ACTION,
    payload,
  };
}

function getCurrencyActionError(payload) {
  return {
    type: GET_CURRENCY_WALLET_ACTION_ERROR,
    payload,
  };
}

function getCurrencyThunk() {
  return (dispatch) => (
    fetchApi()
      .then(
        (data) => dispatch(getCurrencyAction(data)),
      )
      .catch(
        (error) => dispatch(getCurrencyActionError(error.message)),
      )
  );
}

export {
  loginEnterClickAction,
  LOGIN_ENTER_CLICK_ACTION,
  GET_CURRENCY_WALLET_ACTION,
  GET_CURRENCY_WALLET_ACTION_ERROR,
  getCurrencyAction,
  getCurrencyThunk,
};
