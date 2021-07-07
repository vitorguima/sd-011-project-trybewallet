// Coloque aqui suas actions
export const EMAIL = 'EMAIL';
export const getEmail = (e) => ({ type: EMAIL, email: e });

export const REQUEST_API = 'REQUEST_API';
export const requestAPI = () => ({ type: REQUEST_API });

export const CURRENCIES = 'CURRENCIES';
export const getCurrencies = (e) => ({ type: CURRENCIES, currencies: e });

export function fetchAPI() {
  return async (dispatch) => {
    try {
      dispatch(requestAPI());
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      dispatch(getCurrencies(data));
    } catch (error) {
      console.error(error);
    }
  };
}
