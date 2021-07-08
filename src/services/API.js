import fetch from 'node-fetch';
import { requestData, getData, dataFailure } from '../actions';

const URL = 'https://economia.awesomeapi.com.br/json/all';

export const fetchAPI = async () => {
  try {
    const r = await fetch(URL);
    const coin = await r.json();
    const currencies = Object.values(coin);
    const filteredList = currencies.filter((el) => el.codein !== 'BRLT');
    return filteredList;
  } catch (error) {
    return error;
  }
};

export const getExchangeRate = async () => {
  try {
    const r = await fetch(URL);
    const rjson = await r.json();
    const currencies = Object.values(rjson);
    const filteredCoin = currencies.filter((el) => el.codein !== 'BRLT');
    const redx = (prev, curr) => {
      const { code, name, ask } = curr;
      prev[code] = { code, name, ask };
      return prev;
    };
    const results = filteredCoin.reduce(redx, {});

    return results;
  } catch (error) {
    return error;
  }
};

export const sendExpense = async (coin) => async (dispatch) => {
  try {
    const r = await fetch(URL);
    const rjson = await r.json();
    const currencies = Object.values(rjson);
    await dispatch(getData(currencies));
  } catch (error) {
    return error;
  }
};
