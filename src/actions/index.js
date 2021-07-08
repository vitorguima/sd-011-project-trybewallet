// Coloque aqui suas actions
export const VALID_EMAIL = 'VALID_EMAIL';

export const userEmail = (email) => ({
  type: VALID_EMAIL,
  email,
});
