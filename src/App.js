import { browserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <browserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="carteira" component={ Wallet } />
      </Switch>
    </browserRouter>
  );
}

export default App;
