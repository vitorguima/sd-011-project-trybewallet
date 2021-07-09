import { addExpense, dataFailure, getCurrencies } from '../actions';

const URL = 'https://economia.awesomeapi.com.br/json/all';

export const fetchAPI = () => {
  return async (dispatch) => {
    try {
      const r = await fetch(URL);
      const coin = await r.json();
      const currencies = Object.values(coin);
      const filteredList = currencies.filter((el) => el.codein !== 'BRLT');
      return dispatch(getCurrencies(filteredList));
    } catch (error) {
      return dispatch(dataFailure(`${error}`));
    }
  };
};

export const sendExpense = (expense) => async (dispatch) => {
  try {
    const r = await fetch(URL);
    const rjson = await r.json();
    const currencies = Object.values(rjson);
    const redx = (prev, curr) => {
      const { code, name, codein } = curr;
      const newName = name.replace('/Real Brasileiro', '');
      if (codein === 'BRLT') {
        prev.USDT = { ...curr, name: newName };
      } else {
        prev[code] = { ...curr, name: newName };
      }
      return prev;
    };
    const exchangeRates = currencies.reduce(redx, {});
    const newExpense = {
      ...expense,
      exchangeRates,
    };
    await dispatch(addExpense(newExpense));
  } catch (error) {
    return dispatch(dataFailure(`${error}`));
  }
};
