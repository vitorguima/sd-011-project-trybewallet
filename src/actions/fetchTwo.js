import { ADD_EXPENSE } from '.';

export const REQUEST_DATA_TWO = 'REQUEST_DATA_TWO';
export const REQUEST_DATA_TWO_SUCCESS = 'REQUEST_DATA_TWO_SUCCESS';

const requestDataTwo = (payload) => ({
  type: REQUEST_DATA_TWO,
  payload,
});

const requestDataSuccessTwo = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const fetchDataTwo = (dataForm) => (dispatch) => {
  dispatch(requestDataTwo());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((result) => result.json())
    .then((data) => dispatch(requestDataSuccessTwo(
      { ...dataForm, exchangeRates: data },
    )));
};
