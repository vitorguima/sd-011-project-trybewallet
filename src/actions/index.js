export const SET_FORM = 'SET_FORM';
export const SET_CURRENCIES = 'SET_CURRENCIES';

export const setForm = (inputForm) => ({
  type: SET_FORM,
  payload: inputForm,
});

export const setCurrencies = (payload) => ({
  type: SET_CURRENCIES,
  payload,
});
