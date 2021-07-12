import { REQUEST_CURRENCY_API_SUCCESS, REQUEST_CURRENCY_API_ERROR } from '.';
import fetchAPI from '../services/fetchCurrencyAPI';

const receiveCurrency = (currencys) => ({
  type: REQUEST_CURRENCY_API_SUCCESS,
  payload: {
    currencys,
  },
});

const rejectedCurrency = () => ({
  type: REQUEST_CURRENCY_API_ERROR,
  error: 'Erro na API',
});

export default function requestCurrencyAction() {
  return (dispatch) => fetchAPI()
    .then((currencys) => dispatch(receiveCurrency(Object.keys(currencys))))
    .catch(() => dispatch(rejectedCurrency()));
}
