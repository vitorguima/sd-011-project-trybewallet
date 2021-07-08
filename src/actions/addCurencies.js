import { ADD_CURRENCIES } from '../reducers/wallet';

function addCurencies() {
  return (dispatch) => (fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((result) => dispatch({
      type: ADD_CURRENCIES,
      payload: Object.entries(result).reduce((acc, [key, val]) => {
        if (key === 'USDT') return acc;
        return acc.concat(val.code);
      }, []),
    }))
  );
}

export default addCurencies;
