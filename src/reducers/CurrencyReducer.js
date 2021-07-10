import {
  REQUEST_API,
  REQUEST_API_SUCESS,
  REQUEST_API_ERROR,
} from '../actions/index';

const INITIAL_STATE = {
  data: {},
  isLoading: false,
};

function CurrencyReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      isLoading: true,
    };
  case REQUEST_API_SUCESS:
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  case REQUEST_API_ERROR:
    return {
      ...state,
      isLoading: false,
    };
  default:
    return state;
  }
}

export default CurrencyReducer;
