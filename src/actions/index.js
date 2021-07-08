// Coloque aqui suas actions
export const userEmail = 'USER_EMAIL';

export const setUserEmail = (payload) => ({
  type: userEmail,
  payload,
});

export const requestCurrencyTypes = (payload) => ({
  type: 'GET_CURRENCY_TYPES',
  payload,
});

export function fetchCurrencyTypes() {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((currencies) => dispatch(requestCurrencyTypes(currencies)));
}

export const saveExpenses = (expenses) => ({
  type: 'SAVE_EXPENSES',
  payload: {
    expenses,
  },
});
