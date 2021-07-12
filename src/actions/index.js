import fetchApi from '../services/CurrencyApi';

const LOGIN_ENTER_CLICK_ACTION = 'LOGIN_ENTER_CLICK_ACTION';
const GET_CURRENCY_WALLET_ACTION = 'GET_CURRENCY_WALLET_ACTION';
const GET_CURRENCY_WALLET_ACTION_ERROR = 'GET_CURRENCY_WALLET_ACTION_ERROR';
const SEND_INFOS_TO_EXPENSES_ACTION = 'SEND_INFOS_TO_EXPENSES_ACTION';
const ERASE_DISPENSE_ACTION = 'ERASE_DISPENSE_ACTION';

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

function sendInfoToExpensesAction(payload) {
  return {
    type: SEND_INFOS_TO_EXPENSES_ACTION,
    payload,
  };
}

function eraseDispense(index) {
  return {
    type: ERASE_DISPENSE_ACTION,
    index,
  };
}

function getCurrencyThunk() {
  return (dispatch) => (
    fetchApi()
      .then(
        (data) => dispatch(getCurrencyAction(Object.values(data))),
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
  sendInfoToExpensesAction,
  SEND_INFOS_TO_EXPENSES_ACTION,
  ERASE_DISPENSE_ACTION,
  eraseDispense,
};
