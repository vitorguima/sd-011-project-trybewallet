import { combineReducers } from 'redux';
import user from './userReducer';
import wallet from './wallet';

const rootReducer = combineReducers({ wallet, user });

export default rootReducer;
