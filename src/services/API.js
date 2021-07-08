import fetch from 'node-fetch';
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
    const { currency, value } = expense;
    const r = await fetch(URL);
    const rjson = await r.json();
    const currencies = Object.values(rjson);
    const filteredCoin = currencies.filter((el) => el.codein !== 'BRLT');
    const redx = (prev, curr) => {
      const { code, name, ask } = curr;
      prev[code] = { code, name, ask };
      return prev;
    };
    const ExchangeRates = filteredCoin.reduce(redx, {});
    const { name, ask } = ExchangeRates[currency];
    const newName = name.replace('/Real Brasileiro', '');
    const convertedPrice = parseFloat(ask * value).toFixed(2);
    const newExpense = {
      ...expense,
      name: newName,
      ask,
      convertedPrice,
      ExchangeRates,
      value: parseFloat(value).toFixed(2),
    };

    await dispatch(addExpense(newExpense));
  } catch (error) {
    return dispatch(dataFailure(`${error}`));
  }
};
