import { GET_USER_EMAIL, INITIAL_STATE } from '../actions';

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_USER_EMAIL:
    return { ...state, user: { email: action.email } };
  default:
    return state;
  }
}

export default reducer;
