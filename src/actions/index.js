export const LOG_USER = 'LOG_USER';

export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';

export const RECEIVE_EXPENSE = 'RECEIVE_EXPENSE';

export const loginUser = (email) => ({
  type: LOG_USER,
  payload: email,
});

const receiveCurrencies = (payload) => ({
  type: RECEIVE_CURRENCIES,
  payload,
});

const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export function fetchCurrencies() {
  return async (dispatch) => {
    dispatch(requestCurrencies());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((data) => {
        data.json()
          .then((json) => {
            dispatch(receiveCurrencies(json));
          });
      });
  };
}

const receiveExpense = (payload) => ({
  type: RECEIVE_EXPENSE,
  payload,
});

export function addExpense(payload) {
  return (dispatch, getState) => {
    dispatch(fetchCurrencies());
    const newData = getState().wallet.currencies;
    dispatch(receiveExpense({ ...payload, exchangeRates: newData }));
  };
}
