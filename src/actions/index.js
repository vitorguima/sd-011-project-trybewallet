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

export const mountExpenses = (payload) => ({
  type: 'MOUNT_EXPENSES',
  payload,
});

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

export const removeExpense = (index) => ({
  type: 'RMV_EXPENSE',
  index,
});

export const getExpenseForm = (payload) => ({
  type: 'GET_FORM',
  payload,
});

export const updateForm = (payload) => ({
  type: 'UPDT_FORM',
  payload,
});
