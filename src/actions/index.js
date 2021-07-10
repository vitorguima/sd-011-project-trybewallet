export const USER_LOGIN = 'USER_LOGIN';
export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const RECEIVE_CURRENCY = 'RECEIVE_CURRENCY';
export const EXPENSES_ADD = 'EXPENSES_ADD';

export const userLoginAction = (email) => ({
  type: USER_LOGIN,
  email,
});

const requestCurrency = () => ({
  type: REQUEST_CURRENCY,
});

const receiveCurrency = (currencies) => ({
  type: RECEIVE_CURRENCY,
  currencies,
});

export const addExpenses = (expenses, id) => ({
  type: EXPENSES_ADD,
  expenses,
  id,
});

// ira lidar com assincronicidade
export function fetchCurrencies() {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  return (dispatch) => {
    dispatch(requestCurrency());
    return fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch(receiveCurrency(data)));
  };
}
