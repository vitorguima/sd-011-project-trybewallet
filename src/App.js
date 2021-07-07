import React from 'react';
import { Route, Switch } from 'react-router';
import LoginPage from './pages/Login';
import WalletPage from './pages/Wallet';

function App() {
  return (
    <Switch>
      <Route path="/carteira" component={ WalletPage } />
      <Route exact path="/" component={ LoginPage } />
    </Switch>
  );
}

export default App;
