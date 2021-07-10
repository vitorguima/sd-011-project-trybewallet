// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REM_EXPENSE = 'REM_EXPENSE';

const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  email,
});

const fetchCurrenciesStart = () => ({
  type: REQUEST_CURRENCIES,
});

const fetchCurrenciesSuccess = (data) => ({
  type: RECEIVE_CURRENCIES,
  currencies: Object.keys(data).filter((currency) => currency !== 'USDT'),
});

const fetchCurrenciesToExpenses = (data) => ({
  type: ADD_EXPENSE,
  expenses: data,
});

const removeExpense = (id) => ({
  type: REM_EXPENSE,
  id,
});

export {
  saveEmail,
  fetchCurrenciesStart,
  fetchCurrenciesSuccess,
  fetchCurrenciesToExpenses,
  removeExpense,
};

export function fetchCurrencies() {
  return (dispatch) => {
    dispatch(fetchCurrenciesStart());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((json) => dispatch(fetchCurrenciesSuccess(json)));
  };
}

export function fetchToExpenses(forms) {
  return (dispatch) => {
    dispatch(fetchCurrenciesStart());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((json) => dispatch(
        fetchCurrenciesToExpenses({ ...forms, exchangeRates: json }),
      ));
  };
}

export default saveEmail;
