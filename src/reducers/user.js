// Esse reducer será responsável por tratar as informações da pessoa usuária
// import { browserHistory } from 'react-router';

const USER_STATE = {
  email: '',
};

function functionUser(state = USER_STATE, action) {
  switch (action.type) {
  case 'USER_LOGIN':
    return {
      email: action.state,
    };
  default:
    return state;
  }
}

export default functionUser;
