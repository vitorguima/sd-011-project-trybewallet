const KEEP_EMAIL = 'KEEP_EMAIL';
const SAVE_CURRENCIES_STATE = 'SAVE_CURRENCIES_STATE';

export const keepEmail = (email) => (
  {
    type: KEEP_EMAIL,
    email,
  }
);

export const saveCurrenciesState = (allCurrencies) => ({
  type: SAVE_CURRENCIES_STATE,
  payload: allCurrencies,
});

export function getCurrencies() {
  return async (dispatch) => {
    const responses = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currenciesAPI = await responses.json();

    dispatch(saveCurrenciesState(currenciesAPI));
  };
}
