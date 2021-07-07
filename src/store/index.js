import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const extension = window.devToolsExtension() || ((f) => f);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
  compose(extension),
);

export default store;
