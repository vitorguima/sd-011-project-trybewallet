export const SAVE_EMAIL_USER = 'SAVE_EMAIL_USER';
export const SAVE_EXPENSE_WALLET = 'SAVE_EXPENSE_WALLET';
export const SAVE_EXCHANGES_RATES = 'SAVE_EXCHANGES_RATES';
export const DELETE_EXPENSE_WALLET = 'DELETE_EXPENSE_WALLET';

export const saveEmailUser = (payload) => ({
  type: SAVE_EMAIL_USER,
  payload,
});

export const deleteExpenseWallet = (payload) => ({
  type: DELETE_EXPENSE_WALLET,
  payload,
});

const saveExpenseWallet = (payload) => ({
  type: SAVE_EXPENSE_WALLET,
  payload,
});

export const fetchExchangesRatesApi = (expense) => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((result) => result.json())
    .then((data) => {
      const newExpense = expense;
      newExpense.exchangeRates = data;
      dispatch(saveExpenseWallet(newExpense));
    })
    .catch((error) => console.log(error));
};
