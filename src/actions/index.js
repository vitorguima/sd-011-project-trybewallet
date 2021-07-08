// Coloque aqui suas actions
export const USER_LOGIN = 'USER_LOGIN';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const NEW_EXPENSE = 'NEW_EXPENSE';

const saveEmail = (email) => ({
  type: USER_LOGIN,
  payload: email,
});

const updateCurrencies = (data) => ({
  type: REQUEST_API_SUCCESS,
  payload: data,
});

const fetchApi = () => (
  async (dispatch) => {
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    try {
      const response = await fetch(URL);
      const responseJson = await response.json();
      dispatch(updateCurrencies(responseJson));
    } catch (error) {
      console.error(error);
    }
  }
);

const addNewExpense = (data) => ({
  type: NEW_EXPENSE,
  payload: data,
});

export {
  saveEmail,
  fetchApi,
  addNewExpense,
};
