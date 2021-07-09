import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={ () => <Login /> } />
        <Route exact path="/carteira" render={ () => <Wallet /> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
