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

// export const requestCurrencyTypesData = (payload) => ({
//   type: 'GET_CURRENCIES_DATA',
//   payload,
// });

export function fetchCurrencyTypes() {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((currencies) => dispatch(requestCurrencyTypes(currencies)));
}
