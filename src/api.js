async function getCurrency() {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const allCurrencies = await request.json();
  return allCurrencies;
}

export default getCurrency;
