export const LOGIN = 'LOGIN';

export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RECIVED_CURRENCIES = 'RECIVED_CURRENCIES';

export const logInWallet = (value) => ({
  type: LOGIN,
  payload: value,
});

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const recivedCurrencies = (payload) => ({
  type: RECIVED_CURRENCIES,
  payload,
});

export function fetchCurrency() {
  return (dispatch) => {
    dispatch(requestCurrencies());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((data) => data.json()
        .then(
          (result) => dispatch(recivedCurrencies(result)),
        ));
  };
}
