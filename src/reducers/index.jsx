import { combineReducers } from 'redux';
import User from './User';
import Wallet from './Wallet';
import SelectedCurrency from './SelectedCurrency';

const reducer = combineReducers({ User, Wallet, SelectedCurrency });

export default reducer;
