export const GET_USER_EMAIL = 'GET_USER_EMAIL';

export const getUserEmail = (email) => ({
  type: GET_USER_EMAIL,
  email,
});

export const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};