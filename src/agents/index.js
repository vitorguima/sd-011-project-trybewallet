import createAgent from '../utils/createAgent';

const BASE_URL = 'https://economia.awesomeapi.com.br/json/all';

export const receiveCurrencies = createAgent('receiveCurrencies');
export const login = createAgent('login');

export const fetchCurrencies = () => (dispatch) => fetch(BASE_URL)
  .then((response) => response.json())
  .then((currencies) => dispatch(receiveCurrencies(currencies)));
