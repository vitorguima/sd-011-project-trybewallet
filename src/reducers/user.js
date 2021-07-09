import createReducer from '../utils/createReducer';

const initialState = {
  email: '',
};

const actions = {
  LOGIN: (_, { email }) => ({ email }),
};

export default createReducer(initialState, actions);
