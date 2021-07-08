import React from 'react';
import { createStore } from 'redux';
import { Route, Switch } from 'react-router-dom';
import reducer from './reducers';
import Login from './pages/Login';

const store = createStore(reducer);

console.log(store.getState());

store.dispatch({
  type: 'ADD_EXPENSE',
  description: 'Court rent',
  price: 50,
  currency: 'USD',
  tag: 'Sport',
  payment_method: 'credit card',
});

console.log(store.getState());

function App() {
  return (
    <Switch>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
