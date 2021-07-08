export const LOG_USER = 'LOG_USER';

export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';

export const RECEIVE_EXPENSE = 'RECEIVE_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const START_EDIT_EXPENSE = 'START_EDIT_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';

export const loginUser = (email) => ({
  type: LOG_USER,
  payload: email,
});

const receiveCurrencies = (currencies) => ({
  type: RECEIVE_CURRENCIES,
  payload: currencies,
});

const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

const getCurrencies = () => (
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((data) => (
      data.json()
        .then((json) => json)
    ))
);

export function fetchCurrencies() {
  return async (dispatch) => {
    dispatch(requestCurrencies());
    return getCurrencies()
      .then((data) => {
        const moedas = Object.keys(data).filter((moeda) => moeda !== 'USDT');
        dispatch(receiveCurrencies(moedas));
      });
  };
}

const receiveExpense = (expense) => ({
  type: RECEIVE_EXPENSE,
  payload: expense,
});

export const removeExpense = (id) => ({
  type: REMOVE_EXPENSE,
  payload: id,
});

export function addExpense(payload) {
  return async (dispatch) => (
    getCurrencies()
      .then((data) => {
        dispatch(receiveExpense({ ...payload, exchangeRates: data }));
      })
  );
}

export const starEditExpense = (id) => ({
  type: START_EDIT_EXPENSE,
  payload: id,
});

export const editExpense = (newExpense) => ({
  type: EDIT_EXPENSE,
  payload: newExpense,
});
