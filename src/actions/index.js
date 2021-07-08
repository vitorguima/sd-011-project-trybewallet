export const SET_EMAIL = 'SET_EMAIL';

export const emailAction = (email) => (
  {
    type: SET_EMAIL,
    email,
  }
);
