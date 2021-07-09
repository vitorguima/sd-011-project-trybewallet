import { getCurrenciesAPI } from '../service/CurrenciesAPI';

export const USER_LOGIN = 'USER_LOGIN';
export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const REQUEST_CURRENCY_SUCCESS = 'REQUEST_CURRENCY_SUCCESS';
export const REQUEST_CURRENCY_ERROR = 'REQUEST_CURRENCY_ERROR';
export const EXPENSES_ADD = 'EXPENSES_ADD';

export const userLoginAction = (email) => ({
  type: USER_LOGIN,
  email,
});

const requestCurrency = () => ({
  type: REQUEST_CURRENCY,
});

const requestCurrencySuccess = (currencies) => ({
  type: REQUEST_CURRENCY_SUCCESS,
  currencies,
});

const requestCurrencyError = (payload) => ({
  type: REQUEST_CURRENCY_ERROR,
  payload,
});

export const addExpenses = (state) => ({
  type: EXPENSES_ADD,
  state,
});

// ira lidar com assincronicidade
export function fetchCurrencies() {
  return (dispatch) => {
    dispatch(requestCurrency());

    return getCurrenciesAPI()
      .then(
        (location) => dispatch(requestCurrencySuccess(location)),
        (error) => dispatch(requestCurrencyError(error.message)),
      );
  };
}
