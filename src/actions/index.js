const SUBMITLOGIN = 'SUBMIT-LOGIN';
const FETCH_API = 'FETCH-API';
const DISPATCH_EXPENSE = 'DISPATACH_EXPENSE';
export const actionEmail = (email) => ({ type: SUBMITLOGIN, email });

export const outraction = (email) => ({ type: 'xablau', email });

// const requestApi = () => ({
//   type: REQUEST_API });

// outro action creator que retorna um objeto, que você tem feito até então
const receiveApi = (fetchApi) => ({
  type: FETCH_API,
  fetchApi });

// action creator que retorna uma função, possível por conta do pacote redux-thunk
export function fetchApiRequest() {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')// thunk declarado
    .then((response) => response.json())
    .then((fetchApi) => dispatch(receiveApi(fetchApi)));
}

export const dispatchExpense = (expense) => ({
  type: DISPATCH_EXPENSE,
  expense,
});
