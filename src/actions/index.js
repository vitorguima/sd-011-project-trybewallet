// Coloque aqui suas actions

// Action responsável por salvar o input email.
export const GET_EMAIL = 'GET_EMAIL';

const getEmail = (email) => ({
  type: GET_EMAIL,
  email,
});

export default getEmail;
