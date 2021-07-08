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

export const getApi = () => async (dispatch) => {
  dispatch(requestCoin());
  try {
    const fetchApi = await fetch('https://economia.awesomeapi.com.br/json/all');
    const result = await fetchApi.json();
    dispatch(requestSucess(result));
  } catch (error) {
    dispatch(requestFail(error));
  }
};
