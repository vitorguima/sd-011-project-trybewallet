const AWESOME_BASE_API = 'https://economia.awesomeapi.com.br/json';

export const getCurrentCoins = () => (
  fetch(`${AWESOME_BASE_API}/all`)
    .then((answer) => (
      answer
        .json()
        .then((json) => json)
    ))
);

export default getCurrentCoins;
