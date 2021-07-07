// Coloque aqui suas actions
export const loginAction = (email) => ({ type: 'LOGIN', email });

export const requestAPIAction = () => ({ type: 'REQUEST_API' });

export const getCurrenciesAction = (data) => ({ type: 'GET_CURRENCIES', data });

export const addExpenseAction = (expense) => ({ type: 'ADD_EXPENSE', expense });

export const setExpenseAction = (expense) => async (dispatch) => {
  const reponse = await fetch('https://economia.awesomeapi.com.br/json/all');
  const json = await reponse.json(reponse);
  dispatch(addExpenseAction({ ...expense, exchangeRates: json }));
};

export const fetchAPIAction = () => async (dispatch) => {
  dispatch(requestAPIAction());
  const reponse = await fetch('https://economia.awesomeapi.com.br/json/all');
  const json = await reponse.json(reponse);
  dispatch(getCurrenciesAction(json));
};
