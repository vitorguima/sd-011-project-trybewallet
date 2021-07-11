// Coloque aqui suas actions

export const CHANGE_EMAIL = 'CHANGE_EMAIL';

export const saveEmail = (email) => ({
  type: CHANGE_EMAIL,
  payload: email,
});

// export default {
//   CHANGE_EMAIL,
//   saveEmail,
// };
