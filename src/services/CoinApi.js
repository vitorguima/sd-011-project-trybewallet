const ISS_BASE_API = 'https://economia.awesomeapi.com.br/json/all';

const getCoins = () => (
  fetch(ISS_BASE_API)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getCoins;
