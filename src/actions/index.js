import getApi from '../services/fetchAPI';

export const CREATE_USER_EMAIL = 'CREATE_USER_EMAIL';
export const SEND_COIN = 'SEND_COIN';
export const SEND_EXPENSE = 'SEND_EXPENSE';
export const userEmail = (payload) => ({
  type: CREATE_USER_EMAIL,
  payload,
});

export const walletAction = (payload) => ({
  type: SEND_COIN,
  payload,
});

export const expenseAction = (payload) => ({
  type: SEND_EXPENSE,
  payload,
});

export function fetchExpense(element) {
  return async (dispatch) => {
    const data = await getApi();
    const newElement = { ...element, exchangeRates: data };
    dispatch(expenseAction(newElement));
  };
}
