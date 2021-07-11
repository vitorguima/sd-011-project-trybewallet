// Treatment of received currencies === HELPER?
const filteredCurrencys = (currencys) => {
  let currencysFiltered = Object.keys(currencys);
  currencysFiltered = currencysFiltered.filter((currency) => currency !== 'USDT');
  return currencysFiltered;
};

// get Currencies by API
const fetchCurrencys = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  return filteredCurrencys(data);
};
export default fetchCurrencys;
