const fetchApi = async () => {
  const client = await fetch('https://economia.awesomeapi.com.br/json/all.');
  const response = await client.json();
  return response;
};

export default fetchApi;
