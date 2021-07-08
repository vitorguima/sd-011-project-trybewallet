import { createStore, applyMiddleware } from 'redux';
import thunks from 'redux-thunks';
import rootReducer from '../reducers';

const store = createStore(rootReducer, applyMiddleware(thunks));

export default store;
