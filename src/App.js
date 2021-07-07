import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Switch>
      <Route to="/" exact component={ Login } />
      <Route to="/carteira" component={ Wallet } />
    </Switch>
  );
}

export default App;
