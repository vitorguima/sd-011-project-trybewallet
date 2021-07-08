export const SAVE_EMAIL = 'SAVE_EMAIL';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  email,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const fetchCurrencies = (payload) => (dispatch) => {
  const url = 'https://economia.awesomeapi.com.br/json/all';

  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      payload.exchangeRates = data;
      dispatch(addExpense(payload));
    });
};
