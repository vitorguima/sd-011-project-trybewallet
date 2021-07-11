// Coloque aqui suas actions
export const VALID_EMAIL = 'VALID_EMAIL';
export const REQUEST_MOEDAS = 'REQUEST_MOEDAS';
export const RECEIVE_MOEDAS = 'RECEIVE_MOEDAS';
export const FAILED_REQUEST = 'FAILED_REQUEST';

export const userEmail = (email) => ({
  type: VALID_EMAIL,
  email,
});

export const requestMoedas = () => ({
  type: REQUEST_MOEDAS,
});

export const receiveMoedas = (moedas) => ({
  type: RECEIVE_MOEDAS,
  moedas,
});

export const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  error,
});

export const getMoedasThunk = () => async (dispatch) => {
  dispatch(requestMoedas());
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const results = await response.json();
    dispatch(receiveMoedas(results));
  } catch (error) {
    dispatch(failedRequest(error));
  }
};
