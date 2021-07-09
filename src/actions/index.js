export const LOGIN = 'LOGIN';
export const SPENDING = 'SPENDING';

export const requestLogin = (payload) => ({
  type: LOGIN,
  payload,
});

export const spendList = (value) => ({
  type: SPENDING,
  value,
});
