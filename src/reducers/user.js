const INITIAL_STATE = {
  email: '',
  isLoading: false,
};

const USER_LOGIN = 'USER_LOGIN';
const REQUEST_API = 'REQUEST_API';
const GET_DATA = 'GET_DATA';

export default function UserLogin(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      isLoading: true,
    };
  case GET_DATA:
    return {
      ...state,
      isLoading: false,
    };
  case USER_LOGIN:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
}
