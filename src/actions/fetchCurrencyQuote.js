export const FETCH_CURRENCY_QUOTE_SUCESS = 'FETCH_CURRENCY_QUOTE_SUCESS';
export const FETCH_CURRENCY_QUOTE_ERROR = 'FETCH_CURRENCY_QUOTE_ERROR';

const CurrencyQuoteSucessAction = (form, resolve) => ({
  type: FETCH_CURRENCY_QUOTE_SUCESS,
  payload: {
    form,
    resolve,
  },
});

const CurrencyQuoteErrorAction = () => ({
  type: FETCH_CURRENCY_QUOTE_ERROR,
});

export function fetchCurrencyQuote(form) {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((resolve) => {
        let exchangeRates = {};
        Object.values(resolve).forEach((enchanges) => {
          exchangeRates = {
            ...exchangeRates,
            [enchanges.code]: {
              code: enchanges.code,
              name: enchanges.name,
              ask: enchanges.ask,
            },
          };
        });
        form.exchangeRates = exchangeRates;
        dispatch(CurrencyQuoteSucessAction(form));
      })
      .catch(() => dispatch(CurrencyQuoteErrorAction()));
  };
}
