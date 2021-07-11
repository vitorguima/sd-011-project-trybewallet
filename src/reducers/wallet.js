import { RECEIVE_MOEDAS, REQUEST_MOEDAS, FAILED_REQUEST } from '../actions';

const INITIAL_STATE = {
  moedas: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_MOEDAS:
    return { ...state };
  case RECEIVE_MOEDAS:
    return { ...state, moedas: [...state.moedas, action.moedas] };
  case FAILED_REQUEST:
    return { ...state, error: action.error };
  default:
    return state;
  }
}

export default wallet;
