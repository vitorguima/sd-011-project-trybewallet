const fetchApi = async () => {
  const client = await fetch('https://economia.awesomeapi.com.br/json/all.');
  return client;
};

export default fetchApi;
