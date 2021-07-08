export const LOGIN_USER = 'LOGIN_USER';

export const setUser = (userEmail) => ({
  type: LOGIN_USER,
  payload: userEmail,
});
