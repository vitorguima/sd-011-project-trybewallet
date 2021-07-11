export const LOGIN = 'LOGIN';
export const GET_CURRENCY = 'GET_CURRENCY';

export const getEmail = (payload) => ({
  type: LOGIN,
  payload,
});

export const getCurrency = (payload) => ({
  type: GET_CURRENCY,
  payload,
});
