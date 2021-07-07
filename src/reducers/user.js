// Esse reducer será responsável por tratar as informações da pessoa usuária
import { GET_USER } from '../actions/userActions';

const INITIAL_STATE = {

};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_USER:
  // console.log(action)
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};
export default user;
