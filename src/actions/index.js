// Coloque aqui suas actions
const ADD_EMAIL = 'ADD_EMAIL';
const ADD_CURRENCIES = 'ADD_CURRENCIES';

export function addEmail(payload) {
  return {
    type: ADD_EMAIL,
    payload,
  };
}

function addWalletCurrencies(payload) {
  return {
    type: ADD_CURRENCIES,
    payload,
  };
}

export function fetchApi() {
  return async (dispatch) => {
    const requisition = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await requisition.json();
    return dispatch(addWalletCurrencies(data));
  };
}
