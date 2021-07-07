// Esse reducer será responsável por tratar as informações da pessoa usuária
import { GET_USER } from '../actions/index';

const INITIAL_STATE = {
email:'',
}

const user = (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        email: action.payload,
      }
    default:
      return state
  }
}
export default user;
