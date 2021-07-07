// Coloque aqui suas actions
export const USER_INFO = 'USER_INFO';

export const sendInfo = (payload) => ({
  type: USER_INFO,
  payload,
});
