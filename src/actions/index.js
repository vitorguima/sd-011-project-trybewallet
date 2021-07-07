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

export const wallet = (payload) => ({
  type: 'WALLET',
  payload,
});
