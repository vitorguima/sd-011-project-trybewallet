function fetchCurrencyAPI() {
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((resolve) => resolve);
}

export default fetchCurrencyAPI;
