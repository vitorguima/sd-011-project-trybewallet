import { ADD_EXPENSE } from '../reducers/wallet';

function addExpenses(obj) {
  return (dispatch) => (fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((result) => dispatch({
      type: ADD_EXPENSE,
      payload: { ...obj, exchangeRates: result },
    }))
  );
}

export default addExpenses;
