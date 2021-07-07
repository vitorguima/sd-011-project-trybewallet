export const LOG_USER = 'LOG_USER';

export const loginUser = (email) => ({
  type: LOG_USER,
  payload: email,
});
