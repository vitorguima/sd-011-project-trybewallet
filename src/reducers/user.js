// Esse reducer será responsável por tratar as informações da pessoa usuária

const USER_STATE = {
  email: '',
};

function functionUser(state = USER_STATE, action) {
  switch (action.type) {
  case 'USER_LOGIN':
    return {
      email: action.payload,
    };
  default:
    return state;
  }
}

export default functionUser;
