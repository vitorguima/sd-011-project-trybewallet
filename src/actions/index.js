// Coloque aqui suas actions
export const userEmail = (email) => ({ type: 'USER_EMAIL', email });
export const currenciesAction = (currencies) => ({ type: 'GET_CURRENCIES', currencies });

export const fetchCurrencies = () => (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
  .then((result) => result.json())
  .then((data) => dispatch(currenciesAction(data)));
