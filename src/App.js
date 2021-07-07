import React from 'react';
import { Switch, Route } from 'react-router';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={ Login } />
      <Route path="/wallet" component={ Wallet } />
    </Switch>
  );
}

export default App;
