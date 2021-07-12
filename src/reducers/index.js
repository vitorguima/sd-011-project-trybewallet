import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';
import expenseReducer from './expense';

const rootReducer = (combineReducers({ user, wallet, expenseReducer }));

export default rootReducer;
