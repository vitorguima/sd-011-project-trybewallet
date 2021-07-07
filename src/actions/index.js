// Coloque aqui suas actions
export const loginInputs = ({ target }) => {
  const { name } = target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  return {
    type: 'LOGIN_INPUT',
    name,
    value,
  };
};

export const requestMoedas = (payload) => ({
  type: 'FETCH_MOEDAS',
  payload,
});

export const requestMoedasSucess = (payload) => ({
  type: 'FETCH_SUCESS',
  payload,
});

export const requestMoedasError = (payload) => ({
  type: 'FETCH_ERROR',
  payload,
});

export const fetchMoedas = () => (dispatch) => {
  dispatch(requestMoedas());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((result) => result.json())
    .then((data) => dispatch(requestMoedasSucess(data)))
    .catch((error) => dispatch(requestMoedasError(error.message)));
};
