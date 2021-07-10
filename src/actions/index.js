export const LOGIN = 'LOGIN';
export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const RECEIVE_CURRENCY = 'RECEIVE_CURRENCY';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const login = (payload) => ({
  type: 'LOGIN',
  payload,
});

const requestCurrency = () => ({
  type: REQUEST_CURRENCY,
});

const receiveCurrency = (currency) => ({
  type: RECEIVE_CURRENCY,
  currency,
});

export function fetchCurrency() {
  return (dispatch) => {
    dispatch(requestCurrency());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currency) => dispatch(receiveCurrency(currency)));
  };
}

export const addExpenses = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

export const addExp = (state) => async (dispatch) => {
  const exchangeRates = await fetchCurrency();
  const expenses = {
    ...state,
    exchangeRates,
  };
  dispatch(addExpenses(expenses));
};
