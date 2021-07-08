// Coloque aqui suas actions
export const sendEmail = (email) => ({
  type: 'SEND_EMAIL',
  email,
});

export const loadingFetch = () => ({
  type: 'LOADING_FETCH',
});

export const acceptFetch = (json) => ({
  type: 'ACCEPT_FETCH',
  payload: json,
});

export const rejectFetch = (erro) => ({
  type: 'REJECT_FETCH',
  payload: erro,
});

export function fetchPosts() {
  return (dispatch) => {
    dispatch(loadingFetch());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((responseJson) => dispatch(acceptFetch(responseJson)))
      .catch((error) => dispatch(rejectFetch(error)));
  };
}
