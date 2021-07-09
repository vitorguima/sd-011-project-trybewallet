import * as Types from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: '',
  isLoading: false
}

export default function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case Types.GET_DATA:
      return {
        ...state,
        isLoading: false,
        
      }
    case Types.REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      return state;
  }
}
