export const SET_USER = 'SET_USER';

const user = (payload) => ({
  type: SET_USER,
  payload,
});

export default user;
