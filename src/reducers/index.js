import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';
import CurrencyReducer from './CurrencyReducer';

const reducer = combineReducers({ user, wallet, CurrencyReducer });

export default reducer;
