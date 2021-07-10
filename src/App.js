/*
Na app eu coloco um switch pra escolher um caminho só.
E chamo os componentes Login e Wallet atraves das rotas.
*/

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <>
      <div>Hello, TrybeWallet!</div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
      </Switch>
    </>
  );
}

export default App;
