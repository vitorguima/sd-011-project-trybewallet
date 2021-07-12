import { SEND_EXPENSE_SUCCESS, SEND_EXPENSE_ERROR } from '.';
import fetchCurrencyAPI from '../services/fetchCurrencyAPI';

const receiveExchange = (form, currency) => ({
  type: SEND_EXPENSE_SUCCESS,
  payload: {
    form,
    currency,
  },
});

const rejectedExchange = () => ({
  type: SEND_EXPENSE_ERROR,
  payload: 'Error',
});

export default function sendExpenseAction(form) {
  return (dispatch) => fetchCurrencyAPI()
    .then((currency) => dispatch(receiveExchange(form, currency)))
    .catch(() => dispatch(rejectedExchange()));
}
