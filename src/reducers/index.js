import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';

const rootReducer = combineReducers({
  user,
  wallet,
});

export default rootReducer;

// Foi criado o combineReducers, onde vou usar os reducers "user" e "wallet" que vão tratar as informações do usuário e da carteira.
