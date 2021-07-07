import { SIGNIN } from '../reducers/user';

const loginAction = (email, password) => ({
  type: SIGNIN,
  email,
  password,
});

export default loginAction;
