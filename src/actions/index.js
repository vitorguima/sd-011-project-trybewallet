export const CURRENCIES = 'Currencies';
export const EMAIL = 'Email';
export const EXPENCIES = 'Expencies';

export function login(email) {
  return {
    type: EMAIL,
    email,
  };
}
export function currencyQuotes(currencies) {
  return {
    type: CURRENCIES,
    currencies,
  };
}

export function expenseCreate(expenses) {
  return {
    type: EXPENCIES,
    expenses,
  };
}

export function fetchCurrencyQuotes() {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => (response.json()))
      .then((currencies) => dispatch(currencyQuotes(currencies)));
  };
}
