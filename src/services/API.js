import fetch from 'node-fetch';
import { requestData, getData, dataFailure } from '../actions';

const fetchAPI = () => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  return async (dispatch) => {
    dispatch(requestData());
    try {
      const r = await fetch(URL);
      const coin = await r.json();
      const currencies = Object.values(coin);
      dispatch(getData(currencies));
    } catch (error) {
      return dispatch(dataFailure(error));
    }
  };
};

export default fetchAPI;
