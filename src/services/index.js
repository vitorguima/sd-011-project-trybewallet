// get Currencies by API
export const fetchCurrencys = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  return data;
};

// Treatment of received currencies === HELPER?
export const filteredCurrencys = async () => {
  const data = await fetchCurrencys();
  let currencysFiltered = Object.keys(data);
  currencysFiltered = currencysFiltered.filter((currency) => currency !== 'USDT');
  return currencysFiltered;
};
