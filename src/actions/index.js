// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const ADD_CURRENCY = 'ADD_CURRENCY';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const actionLogin = (login) => ({
  type: LOGIN,
  payload: login,
});

export const getCurrency = (payload) => ({ type: ADD_CURRENCY, payload });

export const newExpense = (payload) => ({ type: ADD_EXPENSE, payload });

export function fetchAPI() {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => dispatch(getCurrency(data)));
    // .catch((error) => dispatch(getError(error)));
  };
}
