const INITIAL_STATE_WALLET = {
  currencies: [],
  expenses: [],
  totalfield: 0,
  isLoading: true,
};

const REQUEST_API = 'REQUEST_API';
const GET_DATA = 'GET_DATA';

export default function walletVerification(state = INITIAL_STATE_WALLET, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      isLoading: false,
    };
  case GET_DATA:
    return {
      ...state,
      currencies: [action.data],
    };
  default:
    return { ...state, totalfield: 0 };
  }
}
