const getApi = async () => {
  const currencyResponse = fetch('https://economia.awesomeapi.com.br/json/all');
  const [currency] = await Promise.all([currencyResponse]);
  const currencyJson = await currency.json();
  return currencyJson;
};

export default getApi;
