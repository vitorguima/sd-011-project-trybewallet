const INITIAL_STATE = {
  email: '',
};// Esse reducer será responsável por tratar as informações da pessoa usuária

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'LOGIN':
    return { email: action.email };
  default:
    return state;
  }
}

export default user;
