export const LOGIN_USER = 'LOGIN_USER';
export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const REQUEST_CURRENCY_SUCCESS = 'REQUEST_CURRENCY_SUCCESS';
export const REQUEST_CURRENCY_ERROR = 'REQUEST_CURRENCY_ERROR';
export const NEW_EXPENSE = 'NEW_EXPENSE';

export const setUser = (userEmail) => ({
  type: LOGIN_USER,
  payload: userEmail,
});

export const requestCurrency = () => ({
  type: REQUEST_CURRENCY,
});

export const requestCurrencySuccess = (currencies) => ({
  type: REQUEST_CURRENCY_SUCCESS,
  payload: currencies,
});

export const requestCurrencyError = (error) => ({
  type: REQUEST_CURRENCY_ERROR,
  payload: error,
});

export const newExpense = (expense) => ({
  type: NEW_EXPENSE,
  payload: expense,
});

export const fetchAPI = () => (dispatch) => {
  dispatch(requestCurrency());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((res) => res.json()
      .then(
        (currencies) => dispatch(requestCurrencySuccess(currencies)),
        (error) => dispatch(requestCurrencyError(error)),
      ));
};
