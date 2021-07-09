import { combineReducers } from 'redux';
import userReducer from './userReducer';
import wallet from './wallet';

const rootReducer = combineReducers({ wallet, userReducer });

export default rootReducer;
