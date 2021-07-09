import getAwesomeAPI from '../services/awesomeAPI';

export const REQUEST_CURRENCIES_API = 'REQUEST_API';
export const REQUEST_CURRENCIES_API_SUCCESS = 'REQUEST_API_SUCCESS';

export const requestAPI = (payload) => ({
  type: REQUEST_CURRENCIES_API,
  payload,
});

export const requestAPISuccess = (payload) => ({
  type: REQUEST_CURRENCIES_API_SUCCESS,
  payload,
});

export function fetchAPI() {
  return (dispatch) => {
    dispatch(requestAPI());
    return getAwesomeAPI()
      .then(
        (data) => dispatch(requestAPISuccess(Object.keys(data))),
      );
  };
}
