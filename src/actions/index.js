export const SAVE_USER = 'SAVE_USER';
export const FETCH_CURENCIES_SUCCEEDED = 'FETCH_CURENCIES_SUCCEEDED';
export const FETCH_CURENCIES_FAILED = 'FETCH_CURENCIES_FAILED';
export const ADD_EXPENSE_SUCCEDED = 'ADD_EXPENSE_SUCCEDED';
export const ADD_EXPENSE_FAILED = 'ADD_EXPENSE_FAILED';

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
    payload: currencies.map((item) => item.code),
  };
};

const addExpenseSucceded = (payload) => ({
  type: ADD_EXPENSE_SUCCEDED,
  payload,
});

const fetchCurenciesFailed = (payload) => ({
  type: FETCH_CURENCIES_FAILED,
  payload,
});

const addExpenseFailed = (payload) => ({
  type: ADD_EXPENSE_FAILED,
  payload,
});

export const addExpense = (state) => (dispatch) => fetch(url)
  .then((result) => result.json())
  .then((data) => {
    const obj = {
      ...state,
      exchangeRates: data,
    };
    dispatch(addExpenseSucceded(obj));
  })
  .catch((error) => dispatch(addExpenseFailed(error)));

export const fetchCurencies = () => (dispatch) => fetch(url)
  .then((result) => result.json())
  .then((data) => dispatch(fetchCurenciesSucceeded(data)))
  .catch((error) => dispatch(fetchCurenciesFailed(error)));
