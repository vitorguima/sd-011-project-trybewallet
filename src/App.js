import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <div>
      <div>Hello, TrybeWallet!</div>

      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={ Login }
          />
          <Route
            exact
            path="/carteira"
            component={ Wallet }
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
