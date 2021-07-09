const fetchCurrencyAPI = async () => {
  const result = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = result.json();
  return data;
};

export default fetchCurrencyAPI;
