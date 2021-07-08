export const SAVE_USER = 'SAVE_USER';
export const FETCH_CURENCIES_SUCCEEDED = 'FETCH_CURENCIES_SUCCEEDED';
export const FETCH_CURENCIES_FAILED = 'FETCH_CURENCIES_FAILED';

const url = 'https://economia.awesomeapi.com.br/json/all';

export const saveUser = (payload) => ({
  type: SAVE_USER,
  payload,
});

const fetchCurenciesSucceeded = (payload) => {
  const currencies = Object.values(payload);
  currencies.splice(1, 1);
  return {
    type: FETCH_CURENCIES_SUCCEEDED,
    payload: currencies,
  };
};

const fetchCurenciesFailed = (payload) => ({
  type: FETCH_CURENCIES_FAILED,
  payload,
});

export const fetchCurencies = () => (dispatch) => {
  console.log('executa fetch');
  return fetch(url)
    .then((result) => result.json())
    .then((data) => dispatch(fetchCurenciesSucceeded(data)))
    .catch((error) => dispatch(fetchCurenciesFailed(error)));
};
