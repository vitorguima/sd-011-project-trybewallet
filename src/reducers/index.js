import { combineReducers } from 'redux';
import User from './User';
import Wallet from './Wallet';
import CurrencyReducer from './CurrencyReducer';

const reducer = combineReducers({ User, Wallet, CurrencyReducer });

export default reducer;
