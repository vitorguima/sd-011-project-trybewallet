// Esse reducer será responsável por tratar as informações da pessoa usuária
const ADD_USER = 'ADD_USER';

const INITIAL_STATE = {
  email: '',
  isLogged: false,
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_USER:
    return { isLogged: true, user: action.payload };
  default:
    return state;
  }
}

export default user;
