const SAVE_EMAIL = 'SAVE_EMAIL';
const REQUEST_WALLET = 'REQUEST_WALLET'
const REQUEST_WALLET_SUCCESS = 'REQUEST_WALLET_SUCCESS'
const REQUEST_WALLET_ERROR = 'REQUEST_WALLET_ERROR'

/////////
const saveEmailAction = (payload) => ({
  type: SAVE_EMAIL,
  payload,
});

//////

const requestCurrency = (payload) => ({
  type: REQUEST_WALLET,
  payload
})

const requestCurrencySuccess = (payload) => ({
  type: REQUEST_WALLET_SUCCESS,
  payload
})

const requestCurrencyError = (payload) => ({
  type: REQUEST_WALLET_ERROR,
  payload
})

const fetchCurrency = () => {
  return (dispatch) => {
    return fetch(`https://economia.awesomeapi.com.br/json/all`)
    .then((result) => result.json())
    .then((data) => dispatch(requestCurrencySuccess(Object.keys(data))))
    .catch(console.log)
  } 
}


const actionFunctions = {
  saveEmailAction,
  fetchCurrency,
};

export default actionFunctions;


