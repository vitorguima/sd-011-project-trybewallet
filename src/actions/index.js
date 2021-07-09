export const STORE_EMAIL = 'STORE_EMAIL';
export const REQUESTED_DATA = 'REQUESTING_DATA';
export const RECEIVED_DATA = 'RECEIVED_DATA';

export const addEmail = (email) => ({ type: STORE_EMAIL, email });
export const requestCurrencyData = () => ({ type: REQUESTED_DATA });
export const getCurrencyData = (currency) => ({ type: RECEIVED_DATA, currency });

export function getCurrency() {
  return (dispatch) => {
    dispatch(requestCurrencyData());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((r) => r.json())
      .then((json) => dispatch(getCurrencyData(json)));
  };
}
