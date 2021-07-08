// Base: https://github.com/tryber/exercise-game-of-thrones-characters/blob/master/src/services/charAPI.js
import { setCurrencies, setError } from '../actions';

export default function fetchCurrencies() {
  return (dispatch) => {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    return fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch(setCurrencies(data)))
      .catch((error) => dispatch(setError(error)));
  };
}
