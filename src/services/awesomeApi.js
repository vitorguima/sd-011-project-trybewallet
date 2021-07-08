const AWESOME_BASE_API = 'https://economia.awesomeapi.com.br/json';

export const getCurrentCoins = () => (
  fetch(`${AWESOME_BASE_API}/all`)
    .then((answer) => (
      answer
        .json()
        .then((json) => (answer.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getCurrentCoins;
