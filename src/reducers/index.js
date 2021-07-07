import user from './user';
import wallet from './wallet';
import { combineReducers } from "redux";
export const GLOBAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: []
  }
}


const rootReducer = combineReducers({user});

export default rootReducer;


// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
