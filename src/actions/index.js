export const SET_EMAIL = 'SET_EMAIL';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const FAILED_REQUEST = 'FAILED_REQUEST';

export const emailAction = (email) => (
  {
    type: SET_EMAIL,
    email,
  }
);

const requestCurrencies = () => (
  {
    type: REQUEST_CURRENCIES,
  }
);

const getCurrencies = (json) => (
  {
    type: GET_CURRENCIES,
    currencies: json,
  }
);

const failedRequest = (error) => (
  {
    type: FAILED_REQUEST,
    currencies: error,
  }
);

export const fetchCurrencies = () => (dispatch) => {
  dispatch(requestCurrencies());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((r) => r.json())
    .then(
      (json) => dispatch(getCurrencies(json)),
      (error) => dispatch(failedRequest(error)),
    );
};
