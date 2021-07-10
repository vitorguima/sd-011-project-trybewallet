// Coloque aqui suas actions
// setUsername
// SetPassword

export const SET_USERNAME = 'SET_USERNAME';
export const SET_PASSWORD = 'SET_PASSWORD';

export const setUsername = (payload) => ({
  type: SET_USERNAME,
  payload,
});

export const SetPassword = (payload) => ({
  type: SET_PASSWORD,
  payload,
});
