export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const loginAction = (payload) => ({
  type: LOGIN,
  payload,
});

export const expenseAction = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

// export const fetchPokemon = (pokemonInput) => (dispatch) => {
//   dispatch(requestPokemon())
//   return fetch(`https://api.pokemontcg.io/v1/cards?name=${pokemonInput}`)
//     .then((result) => result.json())
//     .then((data) => dispatch(requestPokemonSuccess(data.cards[0])))
//     .catch((error) => dispatch(requestPokemonError(error)))
// }
