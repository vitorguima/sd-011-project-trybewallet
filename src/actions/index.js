// Coloque aqui suas actions
export const userLogin = (state) => ({
  type: 'USER_LOGIN',
  state,
});

export const setArrayCurrencie = (payload) => ({
  type: 'SUCESS_FETCH',
  payload,
});

export const setArrayExpenses = (payload) => ({
  type: 'SUCESS_EXPENSES',
  payload,
});

export const fetchCurrencie = () => async (dispath) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const object = await response.json();
  const newArray = Object.values(object);
  const moedValid = newArray.filter(({ codein }) => codein !== 'BRLT');
  return dispath(setArrayCurrencie(moedValid));
};
