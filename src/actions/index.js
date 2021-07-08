// Coloque aqui suas actions
export const EMAIL = 'EMAIL';

export function emailToWallet(email) {
  return {
    type: EMAIL,
    email,
  };
}

export const REQUEST_COIN = 'REQUEST_COIN';
export const REQUEST_COIN_SUCESS = 'REQUEST_COIN_SUCESS';
export const REQUEST_COIN_FAIL = 'REQUEST_COIN_FAIL';

export const PAYMENT_SUCESS = 'PAYMENT_SUCESS';

const requestCoin = () => ({
  type: REQUEST_COIN,
});

const requestSucess = (payload) => ({
  type: REQUEST_COIN_SUCESS,
  payload,
});

const requestFail = (payload) => ({
  type: REQUEST_COIN_FAIL,
  payload,
});

const paymentSucess = (state, payload) => ({
  type: PAYMENT_SUCESS,
  payload,
  state,
});

export const getApi = (state = false) => async (dispatch) => {
  dispatch(requestCoin());
  try {
    const fetchApi = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await fetchApi.json();
    dispatch(state ? paymentSucess(state, result) : requestSucess(result));
  } catch (error) {
    dispatch(requestFail(error));
  }
};
