export const SET_USER = 'SET_USER';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';
export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const REQUEST_API_ERROR = 'REQUEST_API_ERROR';

const setUser = (payload) => ({ type: SET_USER, payload });

export const saveExpense = (payload) => ({ type: SAVE_EXPENSE, payload });

const requestApi = (payload) => ({ type: REQUEST_API, payload });

const requestApiSuccess = (payload) => ({ type: REQUEST_API_SUCCESS, payload });

const requestApiError = (payload) => ({ type: REQUEST_API_ERROR, payload });

export const fetchApiThunk = () => async (dispatch) => {
  dispatch(requestApi());
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const results = await response.json();
    dispatch(requestApiSuccess(results));
  } catch (error) {
    dispatch(requestApiError(error));
  }
};

export default setUser;
