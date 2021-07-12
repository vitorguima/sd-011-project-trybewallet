// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',

};
function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'NEW_USER':
    return { email: action.state };
  default:
    return state;
  }
}

export default userReducer;
