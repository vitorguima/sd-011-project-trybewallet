import { combineReducers } from 'redux';
import User from './User';
import Wallet from './Wallet';

const reducer = combineReducers({ User, Wallet });

export default reducer;
