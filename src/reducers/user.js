// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  username: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ACCESS_USER':
    return state;
  default:
    return state;
  }
}

export default user;
