const URL = 'https://economia.awesomeapi.com.br/json/all';

const apiFetch = async () => {
  const api = await fetch(URL);
  const listApi = api.json();
  return listApi;
};

export default apiFetch;
