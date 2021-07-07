import { USER_INFO, GET_DATA, DATA_FAILURE, REQUEST_DATA } from '../actions';
const initialState = { currencies: [], expenses: [] };

const walletReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_DATA: {
      return { ...state, isLoading: true };
    }
    case GET_DATA: {
      return { ...state, currencies: payload, isLoading: false };
    }

    case DATA_FAILURE: {
      return { ...state, payload };
    }
    default:
      return { ...state };
  }
};

export default walletReducer;
