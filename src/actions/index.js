// Coloque aqui suas actions
export const USER_LOGIN = 'USER_LOGIN';

const saveEmail = (email) => ({
  type: USER_LOGIN,
  payload: email,
});

export {
  saveEmail,
};
