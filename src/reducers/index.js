import { combineReducers } from 'redux';
import user from './user';
import WalletReducer from './WalletReducer';

export default combineReducers({
  WalletReducer,
  user,
});
