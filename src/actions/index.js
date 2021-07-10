export const SET_FORM = 'SET_FORM';
export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';

export const setForm = (inputForm) => ({
  type: SET_FORM,
  payload: inputForm,
});

export const fetchCurrencies = (payload) => ({
  type: FETCH_CURRENCIES,
  payload,
});
