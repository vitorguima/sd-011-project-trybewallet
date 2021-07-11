import { createStore } from 'redux';
import reduxDevTools from 'redux-devtools-extension';
import reducer from '../reducers';

const store = createStore(reducer,
  reduxDevTools);

export default store;
